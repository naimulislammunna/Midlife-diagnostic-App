import { useContext } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "react-query";
import { AuthContext } from "../../Auth/AuthProvider";
import Loading from "../../Components/Loader/Loading";
const MyProfile = () => {
    const {userInfo} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const {data, isLoading} = useQuery({
        queryKey: ["users"],
        queryFn: async () =>{
            const response = axiosSecure.get(`/users?email=${userInfo?.email}`)
            return response.data;
        }
    })
    if(isLoading) return <Loading></Loading>
    
    return (
        <div>
            My Profile
        </div>
    );
};

export default MyProfile;