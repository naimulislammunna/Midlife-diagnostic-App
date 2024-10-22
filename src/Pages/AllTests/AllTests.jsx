import { useQuery } from "react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SingleTest from "./singleTest";

const AllTests = () => {
    const axiosPublic = useAxiosPublic();
    
    const { data } = useQuery({
        queryKey: ['all-test'],
        queryFn: async () => {
            const response = await axiosPublic.get('/tests');
            return response.data;
        }
    })

    return (
        <div>
           <div className="grid grid-cols-3 gap-4">
                {
                    data?.map(test => <SingleTest key={test._id} testData={test}/>)
                }
           </div>
        </div>
    );
};

export default AllTests;