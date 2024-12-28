import userWithLap from "../../../assets/images/userWithLap.png";

const Greeting = () => {
  return (
    <section className="w-[90%] mx-auto bg-white rounded-xl   flex mt-10">
      <div className="left flex-[1] flex pl-5 md:pl-24 justify-center flex-col">
        <h4 className="font-bold text-xl md:text-3xl">
          Good Afternoon{" "}
          <span className="text-primary font-extrabold ">super-admin</span>{" "}
        </h4>
        <p className="text-gray-600 text-lg mt-2">Have a nice day at work</p>
      </div>
      <div className="right flex-[1] flex items-center justify-center  ">
        <img src={userWithLap} alt="" className="relative  " />
      </div>
    </section>
  );
};

export default Greeting;
