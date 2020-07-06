import express from "express";
import { PeopleModel } from "../models/index.js";

export default (app) => {
  const router = express.Router();

  router.get("/", async (req, res) => {
    try {
      const people = await PeopleModel.find();
      res.json(people);
    } catch (err) {
      req.log.error(err.message);
      res.status(500).send("Internal Server Error");
    }
  });

  router.post("/", async (req, res) => {
    try {
      // create an instance of the person model
      const person = new PeopleModel(req.body);
      await person.save();
      //  same as above but without save
      // const person = await PeopleModel.create(req.body);
      // persist person to the database
      res.json(person);
    } catch (err) {
      req.log.error(err.message);
      res.status(500).send(err.message);
    }
  });

  router.get("/:personId", async (req, res) => {
    try {
      const person = await PeopleModel.findOne({ _id: req.params.personId });
      res.json(person);
    } catch (err) {
      req.log.error(err.message);
      res.status(500).send("Internal Server Error");
    }
  });

  router.put("/:personId", async (req, res) => {
    try {
      const person = await PeopleModel.findOneAndUpdate(
        { _id: req.params.personId },
        req.body,
        // return the updated model
        { new: true }
      );
      res.json(person);
    } catch (err) {
      req.log.error(err.message);
      res.status(500).send("Internal Server Error");
    }
  });

  app.use("/example", router);
};
