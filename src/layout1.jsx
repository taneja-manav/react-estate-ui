import "./layout1.scss"
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

function Layout(){
    return (

        <div className="layout">
      <div className="navbar">
      <Navbar/>
      </div>
      <div className="content">
      <Outlet/>

      </div>
    </div>
    )
}

export default Layout