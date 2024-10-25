
const About = () => {
    return (
        <div className="flex flex-col sm:flex-row gap-10 py-16">
            <div className="w-full lg:w-1/2 space-y-4">
                <p className="text-mySky font-bold">About Us</p>
                <h1 className="text-myBlue text-5xl font-bold">Why patients choose
                    our center</h1>
                <p className="text-gray-500 pb-7">We strive to help our patients dramatically improve their health and well-being in a totally non-invasive, non-surgical and 100% natural manner.</p>
                <button className="button">Read More</button>
            </div>
            <div className="w-full lg:w-1/2 space-y-4">
                <p className="text-mySky font-bold">Diagnostic Skills</p>
                <h2 className="text-myBlue text-3xl font-bold">Our specialisations</h2>
                <div className="flex flex-col sm:flex-row gap-7 pt-7 justify-center items-center">
                    <div className="radial-progress text-mySky" style={{ "--value": 70, "--size": "11rem", "--thickness": "1rem" }} role="progressbar">
                        <h2 className="text-mySky text-center text-2xl font-bold">70%</h2>
                        <p className="text-center text-myBlue font-bold"> Neurosurgery </p>

                    </div>
                    <div className="radial-progress  text-mySky" style={{ "--value": 85 , "--size": "11rem", "--thickness": "1rem"}} role="progressbar">
                        <h2 className="text-mySky text-center text-2xl font-bold"> 85%</h2>
                        <p className="text-center text-myBlue font-bold">MRI-diagnostic </p>

                    </div>
                    <div className="radial-progress  text-mySky" style={{ "--value": 90 , "--size": "11rem", "--thickness": "1rem"}} role="progressbar">
                        <h2 className="text-mySky text-center text-2xl font-bold"> 90% </h2>
                        <p className="text-center text-myBlue font-bold"> Cardiology</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;