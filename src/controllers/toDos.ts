import { RequestHandler } from 'express'; 
import { nextTick } from 'node:process';
import { ToDo } from '../model/toDo';

const ToDoList: ToDo[] = [];

export const createToDo: RequestHandler = (req, res, next) => {

    const id = Math.random().toString();
    const text = (req.body as { text: string }).text;   //text es any, se hace el casteo para que sepa que es ahora string 
    
    const newToDo = new ToDo(id, text);

    ToDoList.push(newToDo); 

    res.status(201).json(
        {
            message: 'Created ToDo', createToDo: newToDo
        }
    );  //retornar resultado 

};

export const getToDos: RequestHandler = (req, res, next) => {

    res.json(
        {
            toDos: ToDoList
        }
    );

};

export const updateTodo: RequestHandler<{ id:string }> = (req, res, next) => {

    const id = req.params.id;

    const updateText = (req.body as { text: string }).text;

    const toDoIndex = ToDoList.findIndex( resul => resul.id === id);

    if (toDoIndex < 0)
    {
        throw new Error('Could not find ToDo');
    };

    ToDoList[toDoIndex] = new ToDo(ToDoList[toDoIndex].id, updateText);

    res.status(200).json(
        {
            message: 'Updated ToDo',
            updateTodo: ToDoList[toDoIndex]
        }
    );

};

export const deleteToDo: RequestHandler<{ id:string }> = (req, res, next) => {

    const id = req.params.id; 

    const toDoIndex = ToDoList.findIndex( resul => resul.id === id);

    if (toDoIndex < 0)
    {
        throw new Error('Could not find ToDo');
    };

    ToDoList.splice(toDoIndex,1);
    
    res.status(200).json(
        {
            message: 'Deleted ToDo' 
        }
    );
};