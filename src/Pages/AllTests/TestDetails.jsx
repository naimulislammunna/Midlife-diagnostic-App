import { useLoaderData } from "react-router-dom";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { CiCalendarDate } from "react-icons/ci";

const TestDetails = () => {
    const test = useLoaderData();
    console.log(test);

    return (
        <div className="p-20">
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
                        <p className="flex gap-2 items-center"><CiCalendarDate/> {test.date}</p>
                        <p>Slots Available: {test.slots}</p>
                    </div>
                    <div className="card-actions justify-between">
                        <p className="flex gap-2 items-center"><HiOutlineCurrencyDollar/> {test.price}</p>
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestDetails;