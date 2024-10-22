import { createContext, useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useQuery } from "react-query";
import Loading from "../Components/Loader/Loading";
// import Loading from "../Components/Loader/Loading";

export const UserContext = createContext();
const UserProvider = ({children}) => {
    const {userInfo} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const {data, isLoading} = useQuery({
        queryKey: ["users"],
        queryFn: async () =>{
            const response = await axiosSecure.get(`/user?email=${userInfo?.email}`)
            return response;
        }
    })

    if(isLoading) return <Loading/>

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;