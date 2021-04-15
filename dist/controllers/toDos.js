"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteToDo = exports.updateTodo = exports.getToDos = exports.createToDo = void 0;
const toDo_1 = require("../model/toDo");
const ToDoList = [];
const createToDo = (req, res, next) => {
    const id = Math.random().toString();
    const text = req.body.text; //text es any, se hace el casteo para que sepa que es ahora string 
    const newToDo = new toDo_1.ToDo(id, text);
    ToDoList.push(newToDo);
    res.status(201).json({
        message: 'Created ToDo', createToDo: newToDo
    }); //retornar resultado 
};
exports.createToDo = createToDo;
const getToDos = (req, res, next) => {
    res.json({
        toDos: ToDoList
    });
};
exports.getToDos = getToDos;
const updateTodo = (req, res, next) => {
    const id = req.params.id;
    const updateText = req.body.text;
    const toDoIndex = ToDoList.findIndex(resul => resul.id === id);
    if (toDoIndex < 0) {
        throw new Error('Could not find ToDo');
    }
    ;
    ToDoList[toDoIndex] = new toDo_1.ToDo(ToDoList[toDoIndex].id, updateText);
    res.status(200).json({
        message: 'Updated ToDo',
        updateTodo: ToDoList[toDoIndex]
    });
};
exports.updateTodo = updateTodo;
const deleteToDo = (req, res, next) => {
    const id = req.params.id;
    const toDoIndex = ToDoList.findIndex(resul => resul.id === id);
    if (toDoIndex < 0) {
        throw new Error('Could not find ToDo');
    }
    ;
    ToDoList.splice(toDoIndex, 1);
    res.status(200).json({
        message: 'Deleted ToDo'
    });
};
exports.deleteToDo = deleteToDo;
