import { createContext } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useQuery } from "react-query";
import Loading from "../Components/Loader/Loading";
import useAuth from "../Hooks/useAuth";

export const UserContext = createContext();
const UserProvider = ({ children }) => {
    const { userInfo } = useAuth();
    const axiosSecure = useAxiosSecure();


    const { data, isLoading, refetch } = useQuery({
        queryKey: [userInfo?.email],
        queryFn: async () => {
            const response = await axiosSecure.get(`/user?email=${userInfo?.email}`)
            return response.data;
        }
    })
    const info = {
        data,
        refetch
    }

    if (isLoading) return <Loading p={'UP'} />

    return (
        <UserContext.Provider value={info}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;