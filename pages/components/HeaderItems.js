import React from "react";

const HeaderItems = ({ Icon, title }) => {
  return (
    <div className="flex flex-col w-8 sm:w-20 items-center group cursor-pointer hover:text-white">
      <Icon className="h-4 sm:h-7 group-hover:animate-bounce" />
      <div className="tracking-widest mt-1 text-sm opacity-0 group-hover:opacity-100">
        {title}
      </div>
    </div>
  );
};

export default HeaderItems;
