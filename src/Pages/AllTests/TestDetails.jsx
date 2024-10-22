import { useLoaderData } from "react-router-dom";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { CiCalendarDate } from "react-icons/ci";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";

const TestDetails = () => {
    const { userInfo } = useAuth();
    const test = useLoaderData();
    const axiosSecure = useAxiosSecure();

    const bookInfo = {
        email: userInfo.email,
        title: test.title,
        date: test.date,
        image: test.image,
        price: test.price
    }

    const handleBook = async () => {
        const { data } = await axiosSecure.post(`/booking`, bookInfo);
        if (data.insertedId) {
           return toast.success('Test Booked')
        }
    }


    return (
        <div className="p-20">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="card card-side bg-base-100 shadow-xl">
                <figure className="w-1/2">
                    <div>
                        <img
                            src={test?.image}
                            alt="Movie" />
                    </div>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{test?.title}</h2>
                    <p>{test?.description}</p>
                    <div className="flex gap-10 my-5">
                        <p className="flex gap-2 items-center"><CiCalendarDate /> {test.date}</p>
                        <p>Slots Available: {test.slots}</p>
                    </div>
                    <div className="card-actions justify-between">
                        <p className="flex gap-2 items-center"><HiOutlineCurrencyDollar /> {test.price}</p>
                        <button onClick={() => handleBook()} className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestDetails;