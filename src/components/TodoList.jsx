import React, { useContext } from "react";
import { useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { TodoListContext } from "../context/TodoListContext";

const TodoList = () => {
              const [newTodo, setNewTodo] = useState("");

    const { isDarkTheme, lightTheme, darkTheme, changeTheme } = useContext(ThemeContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;

    const { todos, addTodo, removeTodo } = useContext(TodoListContext);
    // console.log(todos);
    // console.log(todos.length)
    const handleChange = (e) => {
       
        setNewTodo( e.target.value )
        
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo("");
    }
    const handleRemoveTodo = (e) => {
       const id = e.target.id;
       removeTodo(id);
    }

    return (
        <div style={{ background: theme.background, color: theme.text, height: "70%", textAlign: "center" }}>

            {todos.length ? (
                todos.map((todo) => {
                    const { text, id } = todo;
                    return (
                        <p className="item" key={id} id={id} onClick={handleRemoveTodo} > {text}</p>
                    )
                })
            ) : (
                <div>You have no todos</div>
            )}
            <form onSubmit={onFormSubmit}>
                <label htmlFor="todo">Add Todo:</label>
                <input type="text" id="todo" onChange = {handleChange} value={newTodo} />
                <input className="ui button primary" type="submit" value="Add New" style={{marginRight:"4px"}} />
                <button className="ui button primary" onClick={changeTheme}> Change The Theme </button>
            </form>



        </div>
    )
}

export default TodoList;