import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Loading from "../Components/Loader/Loading";
import useAdmin from "../Hooks/useAdmin";

const AdminRoutes = ({children}) => {
    const {userInfo} = useAuth();
    const {data , isLoading} = useAdmin();
    const location = useLocation();
    
    
    if(isLoading) return <Loading p={'admin route'}/>

    if(userInfo && data?.role === 'Admin'){
        return children;
    }

    return <Navigate to='/register' state={location.pathname} replace></Navigate>
};

export default AdminRoutes;