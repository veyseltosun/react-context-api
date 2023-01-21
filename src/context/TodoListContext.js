import React, { createContext, useReducer } from "react";
import todosReducer from "./todosReducer";
import { initialState } from "./todosReducer";

export const TodoListContext = createContext();



const TodoListContextProvider = ({ children }) => {
    const [todos, dispatch] = useReducer(todosReducer, initialState)

    

return (
    <TodoListContext.Provider value={{todos, dispatch}}>
        {children}
    </TodoListContext.Provider>

)
}

export default TodoListContextProvider;