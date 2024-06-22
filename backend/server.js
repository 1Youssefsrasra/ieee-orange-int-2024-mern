import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT;

//express app
const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
}) 

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`); 
});