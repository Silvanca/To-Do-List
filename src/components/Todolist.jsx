/*
17.08.25
To do list
Author Silvan
*/


import {useState} from "react";
import "./Todo.css";

export default function Todolist(){

    const[todo, setTodo] = useState([])
    const[newTodo, setNewTodo] = useState("")

    function handleAddTodo(){
        if(newTodo.trim() ==="") return;
        setTodo([... todo, newTodo])
        setNewTodo("")
    }

    function handleDelete(index) {
        setTodo(todo.filter((_, i) => i !== index));
    }

    return (
        <div className="todo-container">
            <h1>To-Do Liste</h1>

            <div className="todo-input">
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Neue Aufgabe..."
                />
                <button onClick={handleAddTodo}>Hinzufügen</button>
            </div>

            <ul>
                {todo.map((todo, index) => (
                    <li key={index}>
                        <span>{todo}</span>
                        <button onClick={() => handleDelete(index)}>Erledigt</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}