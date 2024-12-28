import  { memo } from "react";
import user from "../../assets/images/user.jpg";
import menu from "../../assets/images/menu.png";
import { useNavigate } from "react-router-dom";
type Props = {
  setisOpenSideBar?: any;
  isOpenSideBar?: any;
};

const Navbar = ({setisOpenSideBar,isOpenSideBar}: Props) => {
  const navigate = useNavigate()
  return (
    <nav className="flex h-[70px] w-screen overflow-hidden  bg-white ">
      <div className="left flex-[1]  flex items-center justify-center  ">
        <div className="wrapper w-[90%] mx-auto flex justify-between items-center">
          <h1 className="text-primary text-2xl font-bold uppercase ml-12 cursor-pointer " onClick={()=> navigate('/')}>Whiz Lab</h1>
          <img onClick={()=> setisOpenSideBar(!isOpenSideBar)} src={menu} alt="menu" className="h-8 w-8" />
        </div>
      </div>
      <div className="cenetr hidden md:block flex-[3] "></div>

      <div className="right flex-[1]  hidden md:flex items-center justify-center ">
        <div className="wrapper w-[85%] mx-auto flex gap-5  items-center">
          <h1 className="text-primary font-extrabold text-xl">Super Admin</h1>
          <img src={user} alt="" className="h-9 w-9 rounded-md"  />
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);