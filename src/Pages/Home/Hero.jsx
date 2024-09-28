
const Hero = () => {
    return (
        <div className="bg-[url('https://i.postimg.cc/0yqXZQ4R/accuray-b9v-CIh-I3c-Xg-unsplash.jpg')] lg:h-[105vh] bg-cover flex flex-col lg:flex-row">
            <div className="bg-gradient-to-r from-[#151515] to-[#15151500]">
                <div className="w-full lg:w-3/5 p-5 lg:p-20">
                    <h1 className="text-4xl text-center lg:text-left lg:text-5xl  text-white font-bold lg:leading-tight">Our diagnostic services can help you take control of your health</h1>
                    <p className="my-5 text-white">Our experienced team of board-certified physicians and state-of-the-art technology ensure that we deliver the highest quality diagnostic services possible. We offer a wide range of services, including diagnostic imaging, laboratory testing, and other advanced diagnostics</p>
                    <button className="button-2 my-10"><span>Get Service </span><svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 74 74"
                        height="34"
                        width="34"
                    >
                        <circle strokeWidth="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
                        <path
                            fill="black"
                            d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                        ></path>
                    </svg></button>
                </div>
            </div>

            {/* img part */}
            {/* <div className="w-full lg:w-1/2 flex justify-center items-center p-5">
                <div className="">
                    <img className="" src="https://i.postimg.cc/0yqXZQ4R/accuray-b9v-CIh-I3c-Xg-unsplash.jpg" alt="" />
                </div>
            </div> */}
        </div>
    );
};

export default Hero;