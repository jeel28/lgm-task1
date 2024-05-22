import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiTick } from "react-icons/ti";

export default function Todo({todos , compltedTask , removeTask}) {



    return todos.map((todo,index) => (
        <div className={todo.isComplte ? 'complete task-div' : 'task-div'} key ={index}>
            <div className="todo-text">{todo.text}</div>
            <div className="icons" key={todo.id}>
                <TiTick className={todo.isComplte ? 'hide' : 'tick'} onClick={()=>{compltedTask(todo.id)}}></TiTick>
                <RiCloseCircleLine className="cross" onClick={() => {removeTask(todo.id)}}></RiCloseCircleLine>
            </div>
        </div>
    ))
    
}