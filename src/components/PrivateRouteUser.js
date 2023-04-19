import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "../auth";

const PrivateRouteUser =()=>{
   
    return isLoggedIn()?<Outlet/>:<Navigate to={"/"}/>
 
    
}

export default PrivateRouteUser;