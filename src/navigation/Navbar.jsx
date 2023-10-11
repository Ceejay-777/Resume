import React, { useState } from "react";
import Cee from "../assets/Cee.jsx";
import MainNav from "../reuseables/MainNav.jsx";
import Sidebar from "./Sidebar";
import Hamburger from "../assets/Icons/Hamburger";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="navbar">
      <Cee />

      <MainNav main={true} />

      <Hamburger sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
    </div>
  );
};

export default Navbar;
