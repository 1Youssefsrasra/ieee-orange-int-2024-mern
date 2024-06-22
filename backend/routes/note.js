import express from 'express';
import { getNotes, getNote, createNote, deleteNote, updateNote } from '../controllers/noteController.js';

const router = express.Router();

router.get('/', getNotes);
router.get('/:id', getNote);
router.post('/', createNote);
router.delete('/:id', deleteNote);
router.patch('/:id', updateNote);

export default router;
