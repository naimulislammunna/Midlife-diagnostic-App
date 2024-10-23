import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const AddTest = () => {
    const axiosSecure = useAxiosSecure();
    const imgKey = import.meta.env.VITE_imgBB_key;
    const {
        register,
        handleSubmit,
    } = useForm();


    const onSubmit = async (data) => {
        const { title, slots, price, date, description } = data;

        const photo = { image: data.photo[0] }
        const response = await axios.post(`https://api.imgbb.com/1/upload?key=${imgKey}`, photo, {
            headers: {
                "content-type": "multipart/form-data"
            }
        })


        const test = {
            title,
            slots,
            price,
            date,
            description,
            image: response.data.data.display_url
        }

        const res = await axiosSecure.post('/add-test', test);
        if (res.data?.insertedId) {
            toast.success("Test Added")
        }
    }
    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="my-5">
                <div className="mx-auto w-full max-w-3xl space-y-4 rounded-lg border bg-white p-10 shadow-lg dark:border-cyan-700 dark:bg-cyan-900  shadow-cyan-500/50">
                    <h1 className="text-3xl font-semibold text-cyan-600">Add Test</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 grid grid-cols-1 lg:grid-cols-2 lg:gap-5">
                        <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300 mt-5">
                            <label htmlFor="username_2" className="block font-medium">
                                Test Title
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                                id="username_2"
                                placeholder="Enter Test Title"
                                name="title"
                                type="text"
                                required
                                {...register('title')}
                            />
                        </div>
                        <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300">
                            <label htmlFor="photoUrl" className="block font-medium">
                                Photo
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                                id="photoUrl"
                                placeholder="Enter Url"
                                name="photo"
                                type="file"
                                required
                                {...register('photo')}
                            />
                        </div>
                        <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300">
                            <label htmlFor="email" className="block font-medium">
                                Price
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                                id="email"
                                placeholder="Enter Price"
                                name="price"
                                type="text"
                                required
                                {...register('price')}
                            />
                        </div>
                        <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300">
                            <label htmlFor="email" className="block font-medium">
                                Date
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                                id="email"
                                placeholder="date"
                                type="date"
                                required
                                {...register('date')}
                            />
                        </div>
                        <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300">
                            <label htmlFor="email" className="block font-medium">
                                Total Slots
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                                id="email"
                                placeholder="Slots "
                                type="text"
                                required
                                {...register('slots')}
                            />
                        </div>

                        <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300">
                            <label htmlFor="password_2" className="block font-medium">
                                Description
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                                id="password_2"
                                placeholder="Enter Description"
                                type="text"
                                required
                                {...register('description')}
                            />
                        </div>
                        <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300">

                        </div>
                        <input type="submit" value='Add Test' className="w- rounded-md bg-cyan-700 px-4 py-2 text-white transition-colors hover:bg-cyan-900 dark:bg-cyan-700 cursor-pointer" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTest;