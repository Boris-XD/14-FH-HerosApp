import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";
import { getUser, loginUser, logoutUser } from "../helpers";

const initialState = () => {
   const user = getUser();
   return  {
    logged: !!user,
    user
   }
}

export const AuthProvider = ({ children }) => {
    const [ authState, dispatch ] = useReducer(authReducer, {}, initialState); 


    const userLogin = ( name = "") => {
        const user = {
            Id: "ABC",
            name
        }
        loginUser(user);
        dispatch({
            type: types.login,
            payload: user
        });
    }

    const userLogout = () => {
        logoutUser();

        const action = {
            type: types.logout
        }
        dispatch(action);
    }
    
    return (
        <AuthContext.Provider value={{ userLogin, userLogout, ...authState }}>
            {children}
        </AuthContext.Provider>
    );
};
