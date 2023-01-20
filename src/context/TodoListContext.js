import React, { createContext } from "react";

export const TodoListContext = createContext();

const TodoListContextProvider = ({ children }) => {
    const [todos, setTodos] = useState([
       {text :"Plane the family trip", id:1},
       {text: " Go shopping for dinne" , id:2 },     
       {text :"Go for a walk", id:3},
    ])
,return (
    <TodoListContext.Provider>
        {children}
    </TodoListContext.Provider>

)
}

export default TodoListContextProvider;