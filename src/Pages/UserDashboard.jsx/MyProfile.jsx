import { useContext } from "react";
import { UserContext } from "../../Provider/UserProvider";
import { FaLocationDot } from "react-icons/fa6";
import { MdBloodtype } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const MyProfile = () => {
    const { data } = useContext(UserContext);
    return (
        <div className="my-10">
            <div className="flex max-w-[80%] mx-auto flex-col items-center justify-center md:flex-row shadow-lg dark:border-cyan-700 dark:bg-cyan-900  shadow-cyan-500/50">
                <div className="group relative  sm:w-[350px] flex flex-col justify-center items-center">
                    <img className="w-[150px] h-[150px] scale-105 transform rounded-full bg-black/70 border-4 border-cyan-500" src={data?.photo} />
                    <h3 className="text-2xl font-bold mt-4">{data?.name}</h3>
                    <p>{data?.email}</p>
                </div>
                <div className="min-w-[250px] max-w-[350px] space-y-12 rounded-br-lg rounded-tr-lg bg-white p-10 dark:bg-[#18181B] md:w-[350px]">
                    <div className="space-y-1">
                        <p className="font-semibold my-3">About me</p>
                        <p className="text-gray-500 dark:text-white/70 flex items-center gap-3"><span><MdEmail/></span> {data?.email}</p>
                        <p className="text-gray-500 dark:text-white/70 flex items-center gap-3"> <span><MdBloodtype/></span> {data?.blood}</p>
                        <div className="flex items-center gap-3">
                            <FaLocationDot/>
                            <p className="text-gray-500 dark:text-white/70">  {data?.upozila},</p>
                            <p className="text-gray-500 dark:text-white/70">  {data?.district}</p>
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