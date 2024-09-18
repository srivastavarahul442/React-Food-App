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
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlieStatus?"✅":"🔴"}</li>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About Us</Link></li>
          <li><Link to={"/contact"}>Contact Us</Link></li>
          <li><Link to={"/grocery"}>Grocery</Link></li>
          <li>Cart</li>
          <button
            className="login-btn"
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
