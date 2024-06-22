import db from "../db";
import { ObjectId } from "mongodb";

export const getUsers = async (req, res) => {
  try {
    let collection = await db.collection("users");
    let results = await collection.find({}).toArray();
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getUser = async (req, res) => {
  try {
    let collection = await db.collection("users");
    let query = { _id: new ObjectId(req.params.id) };
    let result = await collection.findOne(query);

    if (!result) res.status(404).json({ message: "User not found" });
    else res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createUser = async (req, res) => {
  try {
    let newDocument = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };
    let collection = await db.collection("users");
    let result = await collection.insertOne(newDocument);
    res.status(204).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const updates = {
      $set: {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      },
    };

    let collection = await db.collection("users");
    let result = await collection.updateOne(query, updates);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };

    const collection = db.collection("users");
    let result = await collection.deleteOne(query);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
