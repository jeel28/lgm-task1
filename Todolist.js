import React, { useState } from 'react';
import Todoforms from './Todoforms';
import Todo from './Todo';


export default function Todolist() {
    // state array which handles all todos
    const [todos , setTodos] = useState([]);

    const addTask = task => {
        if(!task.text){
            return
        }
        const newTodos = [task,...todos];
        setTodos(newTodos);
    }
    //remove task from todolist
    const removeTask = id =>{
        let updatedTask = [...todos].filter(task => task.id != id)
        setTodos(updatedTask)
    }

    //task is complted
    const compltedTask = id =>{
        let updatedTask = todos.map(todo =>{
            if(todo.id === id){
                todo.isComplte = true;
            }
            return todo;
        })
        setTodos(updatedTask)
    }

    return(
        <div>
            <Todoforms addTask={addTask}></Todoforms>
            <Todo todos={todos} compltedTask={compltedTask} removeTask={removeTask}></Todo>
        </div>
    );
}