import LOGO_URL from "../config/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src={LOGO_URL}
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
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