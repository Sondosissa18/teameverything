import express from "express";
import path from "path";
import pino from "pino";
import { v4 as uuidv4 } from "uuid";
import multer from "multer";
import expressPinoLogger from "express-pino-logger";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "./models/index.js";

export const __dirname = path.resolve(path.dirname("."));
export const staticDirectory = path.resolve(__dirname, "public");
export const uploadDirectory = path.resolve(__dirname, "uploads");
export const SERVER_PORT = process.env.PORT || 4000;

export const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, uploadDirectory);
  },
  filename: (req, file, callback) => {
    const fileName = `${uuidv4()}${path.extname(
      file.originalname.toLowerCase()
    )}`;
    callback(null, fileName);
  },
});

export const uploader = multer({ storage });

export const logger = pino({
  prettyPrint: { colorize: true },
});

export const expressPino = expressPinoLogger({
  logger,
});

export const hashPassword = async (pass) => {
  return await bcrypt.hash(pass, 10);
};

export const validatePassword = async (plainPassword, hashedPassword) => {
  return await bcrypt.compare(plainPassword, hashedPassword);
};

export const signToken = (data) => {
  return jwt.sign(data, process.env.AUTH_SECRET, {
    expiresIn: "30d",
  });
};

export const verifyToken = async (token) => {
  const { _id: userId, exp, ...rest } = jwt.verify(
    token,
    process.env.AUTH_SECRET
  );
  if (exp < Date.now().valueOf() / 1000) {
    throw new Error("Unable to verify token");
  }
  return await UserModel.findById(userId);
};
