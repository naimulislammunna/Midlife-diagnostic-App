import axios from "axios";

const createAxios = axios.create({
    baseURL: 'https://midlife-diagnostic-server.vercel.app'
})

const useAxiosPublic = () => {
    return createAxios;
};

export default useAxiosPublic;