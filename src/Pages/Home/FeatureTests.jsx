import { useQuery } from "react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loading from "../../Components/Loader/Loading";
import SingleTest from "../AllTests/singleTest";

const FeatureTests = () => {
    const axiosPublic = useAxiosPublic();
    
    const { data, loading } = useQuery({
        queryKey: ['all-test'],
        queryFn: async () => {
            const response = await axiosPublic.get('/tests');
            return response.data;
        }
    })

    if(loading) return <Loading/>

    return (
        <div>
            <h1 className="text-center mt-20 text-3xl font-semibold">Feature Test</h1>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-10">

                {
                    data?.slice(0, 3).map(test => <SingleTest key={test._id} testData={test}/>)
                }
           </div>
        </div>
    );
};

export default FeatureTests;