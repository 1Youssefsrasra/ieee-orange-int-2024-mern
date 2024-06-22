import express from "express";

const router = express.Router();
const usersRouter = require('./user');
const notesRouter = require('./note');
const tasksRouter= require('./note');


router.use('/user', usersRouter);
router.use('/note', notesRouter);
router.use('/task', tasksRouter);

export default router;

