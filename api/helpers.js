import path from "path";
import pino from "pino";
import { v4 as uuidv4 } from "uuid";
import multer from "multer";


export const __dirname = path.resolve(path.dirname("."));
export const staticDirectory = path.resolve(__dirname, "public");
export const uploadDirectory = path.resolve(__dirname, "uploads");
export const SERVER_PORT = process.env.SERVER_PORT || 4000;

export const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, uploadDirectory);
  },
  filename: (req, file, callback) => {
    const fileName = `${uuidv4()}${path.extname(file.originalname)}`;
    callback(null, fileName);
  },
});

export const uploader = multer({ storage });

export const logger = pino({
  prettyPrint: { colorize: true },
});


