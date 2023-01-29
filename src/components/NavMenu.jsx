import React from "react";
import { NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <div className="w-full border-b border-gray-300 py-1">
      <div className=" w-[55%] mx-auto my-3 text-gray-600 flex items-center justify-between">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "text-white bg-black py-3 px-5 rounded-3xl"
              : "transition-colors hover:text-black"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/videos"}
          className={({ isActive }) =>
            isActive
              ? "text-white bg-black py-3 px-5 rounded-3xl"
              : "transition-colors hover:text-black"
          }
        >
          Videos
        </NavLink>
      </div>
    </div>
  );
};

export default NavMenu;
