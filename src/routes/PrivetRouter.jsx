import { useContext } from "react";
import { authContext } from "../providers/authProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRouter = ({ children }) => {
    let location = useLocation();
    const { user,loading } = useContext(authContext)
    if(loading){
        return <span className="loading loading-dots loading-lg"></span>
    }
    if (user) {
        return children;
    }
  return  <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivetRouter;