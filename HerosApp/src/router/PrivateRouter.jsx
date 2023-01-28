import { useContext } from "react"
import { AuthContext, setLastView } from "../auth"
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRouter = ({ children }) => {

    const { logged } = useContext(AuthContext);
    const { pathname, search } = useLocation();
    setLastView(pathname + search);
    
    return logged
        ? children
        : <Navigate to="login" /> 
}


