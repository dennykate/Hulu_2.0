import React from "react";
import Thumbnail from "./Thumbnail";

const URL =
  "https://i.postimg.cc/7YjrXfCC/i-SA7i-VTz-Ex-Su-Xvj-DEo-FELw-Y5-Jg-T.jpg";
const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const Items = () => {
  return (
    <section className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {arr.map((data, index) => (
        <Thumbnail url={URL} key={index} />
      ))}
    </section>
  );
};

export default Items;
