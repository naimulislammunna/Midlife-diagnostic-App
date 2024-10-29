import axios from "axios";

const createAxios = axios.create({
    baseURL: 'https://midlife-diagnostic-server.vercel.app'
})
const useAxiosSecure = () => {
    return createAxios;
};

export default useAxiosSecure;