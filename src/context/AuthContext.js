import React, { createContext } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn ] = React.useState(false);
    const changeAuthStatus = () => {
        setIsLoggedIn(!isLoggedIn);
    }
    return(
        <AuthContext.Provider   value={{isLoggedIn, changeAuthStatus}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider ;
