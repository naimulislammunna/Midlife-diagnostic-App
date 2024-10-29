import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoutes = ({ children }) => {
    const { userInfo, loading } = useAuth();
    const location = useLocation();
    console.log(userInfo, loading);
    

    if(loading){
        <div className="flex justify-center items-center my-20">
            <span className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-transparent border-l-transparent border-sky-400 flex justify-center my-20"></span>
        </div>
    }

    if(userInfo) {
        return children;
    }
    return <Navigate to='/register' state={location.pathname} replace></Navigate>


};

export default PrivateRoutes;