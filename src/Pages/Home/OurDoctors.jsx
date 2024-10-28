import Card from "../../Components/DoctorsCard/Card";

const OurDoctors = () => {
    return (
        <div className="my-10">
            <p className="text-center text-mySky font-bold my-2">OUR DOCTORS</p>
            <h2 className="text-3xl font-bold text-myBlue text-center my-3">Meet our doctors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-10 ">
                <Card name={'Jhon Selly'} position={'Cerdiology'} img={'https://i.postimg.cc/wjr1gJr8/doctor-with-his-arms-crossed-white-background.jpg'}></Card>

                <Card name={'Selly Era'} position={'Surgery'} img={'https://i.postimg.cc/fySWRgSx/head-shot-woman-wearing-white-600nw-1529466836.webp'}></Card>
                <Card name={'Abraham wick'} position={'Aurthopedic'} img={'https://i.postimg.cc/mhxLzN7K/istockphoto-1311511363-612x612.jpg'}></Card>
            </div>
        </div>
    );
};

export default OurDoctors;