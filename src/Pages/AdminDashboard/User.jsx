
const User = ({ user }) => {
    return (
        <>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{user?.name}</h3>
                    <p className="py-4">{user?.email}</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
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
                    <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                        <h2 className="text-sm font-normal text-emerald-500">Active</h2>
                    </div>
                </td>
                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Admin</td>
                <td onClick={() => document.getElementById('my_modal_5').showModal()} className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"><div className="flex items-center gap-x-2">
                    <p className="px-3 py-2 text-xs text-indigo-500 rounded-full dark:bg-gray-800 border border-blue-600 cursor-pointer">User Info</p>
                </div></td>
                <td className="px-4 py-4 text-sm whitespace-nowrap">
                    <div className="flex items-center gap-x-2">
                        <p className="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">Dwonload</p>
                    </div>
                </td>
                <td className="px-4 py-4 text-sm whitespace-nowrap">
                    <div className="flex items-center gap-x-6">
                        <button className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                            Block
                        </button>
                    </div>
                </td>
            </tr>
        </>

    );
};

export default User;

