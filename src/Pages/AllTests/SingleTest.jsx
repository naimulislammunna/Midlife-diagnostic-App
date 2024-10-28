import { Link } from "react-router-dom";

const SingleTest = ({ testData }) => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                <div className={`w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md`} style={{ backgroundImage: `url(${testData.image})` }}>

                </div>

                <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 ">
                    <h3 className="py-2 font-bold tracking-wide text-center bg-mySky uppercase text-white">{testData?.title}</h3>

                    <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                        <span className="font-bold text-gray-800 dark:text-gray-200">Date: {testData?.date}</span>

                        <span className="font-bold text-gray-800 dark:text-gray-200">Slot: {testData?.slots}</span>

                    </div>
                    <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                        <span className="font-bold text-gray-800 dark:text-gray-200">${testData?.price}</span>
                        <Link to={`/test/${testData._id}`}>
                            <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleTest;