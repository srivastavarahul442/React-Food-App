import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"

const Header = () => {
  const [login, setLogin] = useState("Login");
 const onlieStatus = useOnlineStatus();
  console.log("hello from header")

  //if no dependency array => useEffect called on every render
  //if dependecy array is empty = [] => useEffect called on initial render(just once) 
  //if dependecy array is [login] => called everytime login is called.
  useEffect(()=>{
    console.log("header useEffect")
  },[])
  return (
    <div className="h-30 flex justify-between bg-green-100 p-4 shadow-lg border shadow-gray-300">
      <div className="">
        <img className="h-[130px] rounded-full" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex justify- gap-7">
          <li>Online Status: {onlieStatus?"✅":"🔴"}</li>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About Us</Link></li>
          <li><Link to={"/contact"}>Contact Us</Link></li>
          <li><Link to={"/grocery"}>Grocery</Link></li>
          <li>Cart</li>
          <button
            className="bg-green-500 hover:bg-green-700 py-1 px-2 rounded-lg text-white font-bold"
            onClick={() => {
              login == "Login" ? setLogin("Logout") : setLogin("Login");
            }}
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
