import { useState } from "react";

import LogoCircle from "../../../Images/LogoCircle.png";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <a href="#home" className="menu-bars">
          <div className="hambuger-icon" onClick={showSidebar}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </a>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <a to="#" className="other-menu-bars">
              <div>X</div>{" "}
            </a>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <a href={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <img src={LogoCircle} alt="The Paquin Collection" />
      </nav>
    </>
  );
};

export default Navbar;
