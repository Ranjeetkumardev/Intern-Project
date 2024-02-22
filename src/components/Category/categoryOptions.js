import React from "react";
import { categaryItems } from "../../utils/constants";
import { Link } from "react-router-dom";

const CategoryOptions = () => {
  return (
    <>
      {categaryItems.map((item) => (
        <div key={item.name}>
          <Link to={item.name}>
            <div className="flex flex-col p-2 m-2 w-full">
              <img className="w-20 h-16 rounded-sm" alt="logo" src={item.url} />
              <span className="font-bold text-green-600 p-1 capitalize">
                {item.name}
              </span>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default CategoryOptions;
