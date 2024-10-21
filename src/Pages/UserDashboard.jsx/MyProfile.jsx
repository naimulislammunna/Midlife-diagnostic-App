import { useContext } from "react";
import { UserContext } from "../../Provider/UserProvider";

const MyProfile = () => {
    const {data} = useContext(UserContext);
    return (
        <div>
            <div className="flex flex-col items-center justify-center md:flex-row">
                <div className="group relative  sm:w-[350px]">
                    <img className="w-[200px] h-[200px] scale-105 transform rounded-full bg-black/70" src={data?.photo} />
                </div>
                <div className="min-w-[250px] max-w-[350px] space-y-12 rounded-br-lg rounded-tr-lg bg-white p-10 text-center shadow-[0px_7px_30px_2px_rgba(100,100,111,0.2)] dark:bg-[#18181B] md:w-[350px] dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">
                    <div className="space-y-1">
                        <h2 className="text-center text-2xl font-medium text-gray-700 dark:text-white/90 lg:text-3xl">{data?.name}</h2>
                        <p className="text-gray-500 dark:text-white/70">Blood Group: {data?.blood}</p>
                    </div>
                    <div className="flex flex-wrap items-center justify-between">
                        <div>
                            <p className="text-lg font-semibold">Location : kalkini , Madaripur</p>
                        </div>
                    </div>
                    <div>
                        <button className="rounded-full border border-[#0d87f8] px-4 py-2 text-sm text-[#0d87f8] hover:bg-[#0d87f8] hover:text-white  duration-300 dark:hover:bg-transparent dark:hover:text-[#0d87f8] dark:hover:drop-shadow-[0px_0px_2px_#0d87f8]">Edit Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;