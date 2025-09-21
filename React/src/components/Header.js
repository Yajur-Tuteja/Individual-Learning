import LOGO_URL from "../config/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../config/useOnlineStatus";

const Header = () => {

    // let btnName = "Login"

    const [btnNameReact, setBtnNameReact] = useState("Login");

    // if there is no dependency array => function called after every render
    // if empty dependency array = [] => useEffect called only on initial render(just once)
    // if dependency array is [btnNameReact] => called everytime btnNameReact variable changes
    useEffect(() => {
        console.log("This is Header")
    }, [btnNameReact])

    console.log("Header Rendering");

    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100 lg:bg-green-100">
            <div className="logo-container">
                <img
                    className="w-56"
                    src={LOGO_URL}
                />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status: {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {
                        btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")
                        console.log(btnNameReact)
                    }}
                    >{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;