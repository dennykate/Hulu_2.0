import React from "react";
import Image from "next/image";

import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import HeaderItems from "./HeaderItems";

const Header = () => {
  return (
    <header className="flex justify-between items-center flex-col sm:flex-row p-5">
      <div className="flex flex-grow max-w-2xl justify-evenly">
        <HeaderItems title={"HOME"} Icon={HomeIcon} />
        <HeaderItems title={"TRENDING"} Icon={LightningBoltIcon} />
        <HeaderItems title={"VERIFIED"} Icon={BadgeCheckIcon} />
        <HeaderItems title={"COLLECTIONS"} Icon={CollectionIcon} />
        <HeaderItems title={"SEARCH"} Icon={SearchIcon} />
        <HeaderItems title={"ACCOUNT"} Icon={UserIcon} />
      </div>
      <Image
        src="https://links.papareact.com/ua6"
        alt="Logo"
        width={200}
        height={100}
        className={"object-contain"}
      />
    </header>
  );
};

export default Header;
