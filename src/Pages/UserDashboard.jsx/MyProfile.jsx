import { useContext } from "react";
import { UserContext } from "../../Provider/UserProvider";
import { FaLocationDot } from "react-icons/fa6";
import { MdBloodtype } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast, { Toaster } from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";

const MyProfile = () => {
    const { userInfo } = useAuth();
    const  {data, refetch }= useContext(UserContext);
    
    const axiosSecure = useAxiosSecure();
    const {
        register,
        handleSubmit,
    } = useForm();

    const onSubmit = async (data) => {
        const { name, blood, district, upozila } = data;

        const info = {
            name,
            blood,
            district,
            upozila
        }

        const res = await axiosSecure.patch(`/user?email=${userInfo?.email}`, info);
        if (res.data?.modifiedCount > 0) {
            toast.success("Save Info")
            refetch();
        }

    }
    return (
        <>
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
                            <p className="text-gray-500 dark:text-white/70 flex items-center gap-3"><span><MdEmail /></span> {data?.email}</p>
                            <p className="text-gray-500 dark:text-white/70 flex items-center gap-3"> <span><MdBloodtype /></span> {data?.blood}</p>
                            <div className="flex items-center gap-3">
                                <FaLocationDot />
                                <p className="text-gray-500 dark:text-white/70">  {data?.upozila},</p>
                                <p className="text-gray-500 dark:text-white/70">  {data?.district}</p>
                            </div>
                        </div>
                        <div>
                            <button onClick={() => document.getElementById('my_modal_1').showModal()} className="rounded-full border border-[#0d87f8] px-4 py-2 text-sm text-[#0d87f8] hover:bg-[#0d87f8] hover:text-white  duration-300 dark:hover:bg-transparent dark:hover:text-[#0d87f8] dark:hover:drop-shadow-[0px_0px_2px_#0d87f8]">Edit Profile</button>
                        </div>
                    </div>
                </div>
            </div>

            <dialog id="my_modal_1" className="modal">
                <div className="modal-box max-w-[75%] max-h-[90%] py-4">
                    <Toaster
                        position="top-center"
                        reverseOrder={false}
                    />
                    <form method="dialog" className="text-end">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                    <div className="my-2">
                        <div className="mx-auto w-full max-w-3xl space-y-2 rounded-lg border bg-white px-10 py-5 shadow-lg dark:border-cyan-700 dark:bg-cyan-900  shadow-cyan-500/50">

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 grid grid-cols-1 lg:grid-cols-2 lg:gap-5">
                                <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300 mt-5">
                                    <label htmlFor="username_2" className="block font-medium">
                                        Name
                                    </label>
                                    <input
                                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                                        id="username_2"
                                        placeholder="Enter Test name"
                                        type="text"
                                        required
                                        {...register('name')}
                                    />
                                </div>
                                <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300">
                                    <label htmlFor="email" className="block font-medium">
                                        District
                                    </label>
                                    <input
                                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                                        id="email"
                                        placeholder="Enter district"
                                        name="district"
                                        type="text"
                                        required
                                        {...register('district')}
                                    />
                                </div>
                                <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300">
                                    <label htmlFor="email" className="block font-medium">
                                        Blood Group
                                    </label>
                                    <input
                                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                                        id="email"
                                        placeholder="blood Group "
                                        type="text"
                                        required
                                        {...register('blood')}
                                    />
                                </div>

                                <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300">
                                    <label htmlFor="password_2" className="block font-medium">
                                        Upozila
                                    </label>
                                    <input
                                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                                        id="password_2"
                                        placeholder="Enter upozila"
                                        type="text"
                                        required
                                        {...register('upozila')}
                                    />
                                </div>
                                <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300">

                                </div>
                                <input type="submit" value='Save' className="w- rounded-md bg-cyan-700 px-4 py-2 text-white transition-colors hover:bg-cyan-900 dark:bg-cyan-700 cursor-pointer" />
                            </form>
                        </div>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default MyProfile;