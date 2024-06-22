import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI; 
const client = new MongoClient(uri);

let notesDb;
let tasksDb;
let usersDb;

const connectDB = async () => {
    try {
        // Connect the client to the server
        await client.connect();
        console.log("Connected to MongoDB");

        // Access or create databases for notes, tasks, and users
        notesDb = client.db("notes");
        tasksDb = client.db("tasks");
        usersDb = client.db("users");
    } catch(err) {
        console.error("Error connecting to MongoDB:", err);
    }
};

export { connectDB, notesDb, tasksDb, usersDb };
