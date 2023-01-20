import React, { createContext} from "react";

export const TodoListContext = createContext();

const TodoListContextProvider = ({children}) => {
    return(
        <TodoListContext.Provider>
            {children}
        </TodoListContext.Provider>

    )
}

export default TodoListContextProvider;