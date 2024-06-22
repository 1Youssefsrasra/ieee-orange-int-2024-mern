import express from 'express';
import { getTasks, getTask, createTask, deleteTask, updateTask } from '../controllers/taskController.js';

const router = express.Router();

router.get('/', getTasks);
router.get('/:id', getTask);
router.post('/', createTask);
router.delete('/:id', deleteTask);
router.patch('/:id', updateTask);

export default router;
