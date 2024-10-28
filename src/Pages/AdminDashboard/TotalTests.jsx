import { useQuery } from "react-query";
import toast, { Toaster } from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const TotalTests = () => {
    const axiosSecure = useAxiosSecure();
    
    const { data , refetch} = useQuery({
        queryKey: ['all-test'],
        queryFn: async () => {
            const response = await axiosSecure.get('/tests');
            return response.data;
        }
    })

    const handleCencel = async (id) => {
        toast(() => (
            <span>
                Do you Want to Delete test
                <button onClick={async () => {
                    const res = await axiosSecure.delete(`/all-test/${id}`);
                    if (res.data?.deletedCount) {
                        toast.success("Test Cenceled")
                        refetch();
                    }
                }} className="bg-blue-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md ml-2">
                    Delete
                </button>
            </span >
        ));
    }
    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="overflow-x-auto">
                <h1 className="text-center text-xl font-semibold mt-5">Total Tests</h1>
                <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
                    <thead>
                        <tr className="bg-[#0095FF] text-white">
                            <th className="py-4 px-6 text-lg text-left border-b"> Image</th>
                            <th className="py-4 px-6 text-lg text-left border-b">Test Name</th>
                            <th className="py-4 px-6 text-lg text-left border-b">Price</th>
                            <th className="py-4 px-6 text-lg text-left border-b">Date</th>
                            <th className="py-4 px-6 text-lg border-b text-end">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map(test => <tr className="hover:bg-gray-50 border-b transition duration-300" key={test._id}>
                                <td className="py-4 px-4 flex justify-start">
                                    <img src={test?.image} alt="table navigate ui" className="h-16 w-16 object-cover rounded-full bg-gray-300" />
                                </td>
                                <td className="py-4 px-6 border-b text-xl font-medium">{test?.title}</td>
                                <td className="py-4 px-6 border-b text-lg font-medium">$ {test?.price}</td>
                                <td className="py-4 px-6 border-b text-lg font-medium">{test?.date}</td>
                                <td className="py-4 px-6 border-b text-end">
                                    <button onClick={() => handleCencel(test._id)} className="bg-blue-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TotalTests;