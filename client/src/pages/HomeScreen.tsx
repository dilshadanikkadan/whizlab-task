import { useNavigate } from "react-router-dom";
import Navbar from "../components/layoutes/Navbar";
import Greeting from "../components/pages/home/Greeting";
import HomeCard from "../components/pages/home/HomeCard";

const HomeScreen = () => {
  const navigate = useNavigate();
  return (
    <main>
      <Navbar />
      <Greeting />
      <div className="wrapper w-[90%] mx-auto mt-8 flex flex-wrap gap-10">
        <HomeCard  number={4} title="Category"/>
        <HomeCard  number={10} title="Inventory"/>
        <HomeCard  number={6} title="Upcoming"/>
      </div>
      <div className="btnWrapper w-[90%] mx-auto mt-8 flex justify-end">
        <button
          onClick={() => navigate("/all-inventories")}
          className="text-white bg-[#CA5C67] rounded-md py-1.5 px-3 "
        >
          View All Inventories
        </button>
      </div>
    </main>
  );
};

export default HomeScreen;
