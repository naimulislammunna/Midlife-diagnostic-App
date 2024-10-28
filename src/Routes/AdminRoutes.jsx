import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Loading from "../Components/Loader/Loading";
import { useQuery } from "react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const AdminRoutes = ({children}) => {
    const axiosSecure = useAxiosSecure();
    const {userInfo, loading} = useAuth();

    const {data, isLoading} = useQuery({
        queryKey: ['role'],
        enabled: !loading && !!userInfo,
        queryFn: async () =>{
            const response = await axiosSecure.get(`/admin?email=${userInfo?.email}`);
            
            return response.data;
        },
        
    })
    // console.log("admin routes", role);
    
    if(isLoading || loading) return <Loading/>

    if(data?.role === 'Admin'){
        return children;
    }

    return <Navigate to='/' replace></Navigate>
};

export default AdminRoutes;