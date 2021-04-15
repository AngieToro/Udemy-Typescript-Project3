///const express = require('express');
//const Routrer = express.Router; 

import { Router } from 'express'; 
import { createToDo, getToDos, updateTodo, deleteToDo } from '../controllers/toDos';

const router = Router();

router.post('/', createToDo);

router.get('/', getToDos);

router.patch('/:id', updateTodo);

router.delete('/:id', deleteToDo);

export default router;