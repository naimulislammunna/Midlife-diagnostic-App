
const Card = ({name, img, position}) => {
    return (
        <div className="flex max-w-[350px] flex-col items-center justify-center space-y-4 rounded-xl bg-teal-100/50  p-8 shadow-lg dark:bg-[#18181B]">
            <div className="group relative">
                <img width={180} height={180} className="h-[180px] w-[180px] rounded-full bg-slate-500 object-cover border-4 border-mySky" src={img} alt="card navigate ui" />
            </div>
            <div className="space-y-3 text-center">
                <h1 className="text-2xl font-semibold text-myBlue">{name}</h1>
                <p className="text-sm font-bold bg-mySky px-2 py-2 rounded-full  text-white">{position}</p>
            </div>
            {/* bio  */}
            <p className="pb-2 text-center text-sm text-gray-500">This study aimed to determine the factors that influence patient satisfaction with ecdemic medical care</p>
            <button className="w-full rounded-full py-2 text-[12px] font-semibold text-myBlue ring-1 ring-mySky hover:bg-myBlue hover:text-white sm:text-sm md:text-base">View Profile</button>
        </div>
    );
};

export default Card;
