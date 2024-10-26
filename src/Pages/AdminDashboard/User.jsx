
import jsPDF from "jspdf";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast, { Toaster } from "react-hot-toast";
import { FaUser } from "react-icons/fa";
import { MdAdminPanelSettings, MdBloodtype, MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const User = ({ user, refetch }) => {
    const axiosSecure = useAxiosSecure();

    const handleDwonload = () => {
        const doc = new jsPDF();
        doc.setFontSize(26);
        doc.text("Mid Life Diagnostic Center", 105, 30, null, null, "center");
        doc.setFontSize(18);

        doc.text(`Name: ${user?.name}`, 105, 40, null, null, "center");

        doc.text(`Email: ${user?.email}`, 105, 50, null, null, "center");

        doc.text(`Blood group: ${user?.blood}`, 105, 60, null, null, "center");
        doc.save("a4.pdf");
    }

    const handleBlock = async (id) => {
        const res = await axiosSecure.patch(`/block-users/${id}`);
        if (res.data?.modifiedCount > 0) {
            toast.success('User Blocked',
                {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                }
            );
            refetch();
        }
    }
    const handleActive = async (id) => {

        const res = await axiosSecure.patch(`/active-users/${id}`);
        if (res.data?.modifiedCount > 0) {
            toast.success('User Active');
            refetch();
        }
    }
    const handleRole = async (id) => {
        const res = await axiosSecure.patch(`/users-role/${id}`);
        console.log(res);

        if (res.data?.modifiedCount > 0) {
            toast.success('Make Admin Succesfully',
                {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                }
            );
            refetch();
        }
    }


    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="bg-white px-10 rounded-3xl max-w-[75%] max-h-[90%] py-10">
                    <form method="dialog" className="text-end">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                    <div className="my-2">
                        <div className="flex max-w-[80%] mx-auto flex-col items-center justify-center md:flex-row shadow-lg dark:border-cyan-700 dark:bg-cyan-900  shadow-cyan-500/50">
                            <div className="group relative  sm:w-[350px] flex flex-col justify-center items-center">
                                <img className="w-[150px] h-[150px] scale-105 transform rounded-full bg-black/70 border-4 border-cyan-500" src={user?.photo} />
                                <h3 className="text-2xl font-bold mt-4">{user?.name}</h3>
                                <p>{user?.email}</p>
                            </div>
                            <div className="min-w-[250px] max-w-[350px] space-y-12 rounded-br-lg rounded-tr-lg bg-white p-10 dark:bg-[#18181B] md:w-[350px]">
                                <div className="space-y-1">
                                    <p className="font-semibold my-3">About me</p>
                                    <p className="text-gray-500 dark:text-white/70 flex items-center gap-3"><span><MdEmail /></span> {user?.email}</p>
                                    <p className="text-gray-500 dark:text-white/70 flex items-center gap-3"> <span><MdBloodtype /></span> {user?.blood}</p>
                                    <div className="flex items-center gap-3">
                                        <FaLocationDot />
                                        <p className="text-gray-500 dark:text-white/70">  {user?.upozila},</p>
                                        <p className="text-gray-500 dark:text-white/70">  {user?.district}</p>
                                    </div>
                                </div>
                                <div>
                                    <button className="rounded-full border border-[#0d87f8] px-4 py-2 text-sm text-[#0d87f8] hover:bg-[#0d87f8] hover:text-white  duration-300 dark:hover:bg-transparent dark:hover:text-[#0d87f8] dark:hover:drop-shadow-[0px_0px_2px_#0d87f8]">Edit Profile</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>
            <tr>
                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                    <div className="inline-flex items-center gap-x-3">
                        <div className="flex items-center gap-x-2">
                            <img className="object-cover w-10 h-10 rounded-full" src={user?.photo} alt="" />
                            <div>
                                <h2 className="font-medium text-gray-800 dark:text-white ">{user?.name}</h2>
                                <p className="text-sm font-normal text-gray-600 dark:text-gray-400">{user?.email}</p>
                            </div>
                        </div>
                    </div>
                </td>
                <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                    <div className={`${user.status === 'Blocked' ? 'inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-800' : 'inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800'}`}>
                        {
                            user.status === 'Blocked' ? '' : <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                        }

                        <h2 className={`${user.status === 'Blocked' ? 'text-red-500' : 'text-sm font-normal text-emerald-500'}`}>{user?.status}</h2>
                    </div>
                </td>
                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                    <div onClick={() => handleRole(user._id)} className="cursor-pointer">
                        {
                            user?.role === 'Admin' ? <>
                                <p className="flex justify-center text-xl text-emerald-600"><MdAdminPanelSettings /></p>
                                <p className="text-center"><span>Admin</span></p>
                            </>
                                : <>
                                    <p className="flex justify-center"><FaUser /> </p>
                                    <p className="text-center"><span>User</span></p>
                                </>
                        }
                    </div>
                </td>
                <td onClick={() => document.getElementById('my_modal_5').showModal()} className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                    <div className="flex items-center gap-x-2">
                        <p className="px-3 py-2 text-xs text-indigo-500 rounded-full dark:bg-gray-800 border border-blue-600 cursor-pointer">User Info</p>
                    </div>
                </td>
                <td className="px-4 py-4 text-sm whitespace-nowrap">
                    <div className="flex items-center gap-x-2">
                        <button onClick={() => handleDwonload(user._id)} className="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">Dwonload</button>
                    </div>
                </td>
                <td className="px-4 py-4 text-sm whitespace-nowrap">
                    <div className="flex items-center">

                        {
                            user?.status === 'Active' ? <p onClick={() => handleBlock(user._id)} className=' px-4 py-2 text-xs text-red-500 rounded-full dark:bg-gray-800 bg-red-100/60 cursor-pointer' >Block</p>
                                :
                                <p onClick={() => handleActive(user._id)} className='px-4 py-2 text-xs text-emerald-500 rounded-full dark:bg-gray-800 bg-emerald-100/60 cursor-pointer' >Active</p>
                        }


                    </div>
                </td>
            </tr>
        </>

    );
};

export default User;

