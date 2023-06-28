import React, { useState } from "react";
import Header from "./Header";
import MobileDrawer from "../Mobile/MobileDrawer";

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const handleDrawerMenuClick = () => {
    setIsDrawerOpen((prev) => !prev);
  };
  return (
    <nav className="relative border-b-[1px] flex justify-center ">
      <Header handleDrawerMenuClick={handleDrawerMenuClick} />

      <section
        className={`${
          isDrawerOpen ? "translate-x-[-1000px]" : "translate-x-0"
        } h-full w-full absolute duration-700 lg:hidden `}
      >
        <MobileDrawer handleDrawerMenuClick={handleDrawerMenuClick} />
      </section>
    </nav>
  );
};

export default NavBar;
