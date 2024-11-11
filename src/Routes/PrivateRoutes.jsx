import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Loading from "../Components/Loader/Loading";

const PrivateRoutes = ({ children }) => {
    const { userInfo, loading } = useAuth();
    const location = useLocation();

    if(loading) return <Loading/>

    if(userInfo) {
        return children;
    }
    return <Navigate to='/register' state={location.pathname} replace></Navigate>


};

export default PrivateRoutes;