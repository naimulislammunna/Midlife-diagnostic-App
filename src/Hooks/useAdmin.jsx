import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const axiosSecure = useAxiosSecure();
    const {userInfo, loading} = useAuth();

    const {data, isLoading} = useQuery({
        queryKey: ['role', userInfo?.email],
        enabled: !loading && !!userInfo?.email,
        queryFn: async () =>{
            const response = await axiosSecure.get(`/admin?email=${userInfo?.email}`);
            
            return response.data;
        },       
    })
    return {data, isLoading};
};

export default useAdmin;