import React from "react";
import { Link } from "react-router-dom";

const PopularCard = ({ data }) => {
  return (
    <div className="p-2 space-y-3 text-white cursor-pointer hover:scale-95 transition-all duration-700">
      <div className="p-3 h-80 bg-primary flex flex-col justify-between text-center">
        <div className="text-xl">{data.name}</div>
        <div className="lg:w-72 sm:w-52 h-auto mx-auto">
          <img
            className="w-full h-full object-cover"
            src={data.image}
            alt={data.category}
          />
        </div>
        <Link
          to={data.link}
          className="text-xl bg-white rounded-md py-1.5 px-2 text-primary font-semibold"
        >
          {data.category}
        </Link>
      </div>
    </div>
  );
};

export default PopularCard;
