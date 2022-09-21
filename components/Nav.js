import React from "react";
import request from "../Utils/request";

const Nav = () => {
  return (
    <div className="relative">
      <nav className="flex whitespace-nowrap space-x-10 sm:space-x-20 px-10 overflow-x-scroll scrollbar-hide">
        {Object.entries(request).map(([key, { title, url }]) => (
          <h2
            className="text-xl transition duration-100 hover:scale-125 hover:text-white 
         cursor-pointer"
            key={key}
          >
            {title}
          </h2>
        ))}
      </nav>
      <div
        className="absolute top-0 right-0 w-12 h-8 
      bg-gradient-to-l from-[#06202A]"
      ></div>
    </div>
  );
};

export default Nav;
