import "./navbar.scss";
import { useState } from "react";
function Navbar(){
    const [open,setOpen]=useState(false)
    return (
        <nav>
            <div className="left">
                <a href="#" className="logo">
                    <img src="logo.png" alt="Logo"/>
                    <span>futuristic realtors</span>
                </a>
                <a href='#'>home</a>
                <a href='#'>about</a>
                <a href='#'>contact</a>
                <a href='#'>agents</a>
            </div>
            <div className="right">
                <a href='#'>sign in </a>
                <a href='#'className="register">sign up</a>
                <div className="menuicon">
                    <img src="/menu.png" alt="" onClick={() => setOpen((perv)=>!perv)}/>
                </div>
                <div className={open ? "menu active" : "menu"}>
                <a href='#'>home</a>
                <a href='#'>about</a>
                <a href='#'>contact</a>
                <a href='#'>agents</a>
                <a href='#'>sign in</a>
                <a href='#'>sign up</a>
                </div>
            
            
            </div>

        </nav>
    )

}

export default Navbar;