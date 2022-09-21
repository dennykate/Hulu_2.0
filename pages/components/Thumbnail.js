import React from "react";
import Image from "next/image";

import { ThumbUpIcon } from "@heroicons/react/outline";

const Thumbnail = ({ url }) => {
  return (
    <div className="group cursor-pointer p-2 transition duration-200 transform sm:hover:scale-105 hover:z-10">
      <Image
        src={url}
        alt={"Thumbnail"}
        width={1920}
        height={1080}
        layout="responsive"
      />
      <h2
        className="text-2xl transalate-all duration-200 ease-in-out group-hover:text-white 
      group-hover:font-bold px-2"
      >
        Love Island
      </h2>
      <div className="truncate mx-2 max-w-md">
        American version of the British dating reality competition in which ten
        singles come to stay in a villa for a few weeks and have to couple up
        with one another. Over the course of those weeks, they face the public
        vote and might be eliminated from the show. Other islanders join and try
        to break up the couples.
      </div>
      <div className="opacity-0 group-hover:opacity-100 flex w-40 items-center justify-between mx-2">
        2019-08-22 <ThumbUpIcon className="h-6" /> 1230
      </div>
    </div>
  );
};

export default Thumbnail;
