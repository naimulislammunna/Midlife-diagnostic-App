import axios from "axios";

const createAxios = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    return createAxios;
};

export default useAxiosSecure;