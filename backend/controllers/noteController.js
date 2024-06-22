import db from "../db";
import { ObjectId } from "mongodb";

export const getNotes = async (req, res) => {
  try {
    let collection = await db.collection("notes");
    let results = await collection.find({}).toArray();
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getNote = async (req, res) => {
  try {
    let collection = await db.collection("notes");
    let query = { _id: new ObjectId(req.params.id) };
    let result = await collection.findOne(query);

    if (!result) res.status(404).json({ message: "Not found" });
    else res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createNote = async (req, res) => {
  try {
    let newDocument = {
      title: req.body.title,
      content: req.body.content,
    };
    let collection = await db.collection("notes");
    let result = await collection.insertOne(newDocument);
    res.status(204).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateNote = async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const updates = {
      $set: {
        title: req.body.title,
        content: req.body.content,
      },
    };

    let collection = await db.collection("notes");
    let result = await collection.updateOne(query, updates);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };

    const collection = db.collection("notes");
    let result = await collection.deleteOne(query);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
