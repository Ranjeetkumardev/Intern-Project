import React from "react";
import { Link } from "react-router-dom";

const FoodCard = ({ foodInfo }) => {
  const { strCategory, strCategoryThumb, strCategoryDescription } =
    foodInfo;
 //  console.log(foodInfo);
  return (
    <Link to={"/foodCardInfo/" + strCategory}>
      <div className=" m-4 overflow-hidden bg-white-100 bg-white-100 hover:shadow-xl w-72 h-72 rounded-lg shadow">
        <div className="flex flex-col justify-center items-center ">
          <img
            alt="Dinks_IMG"
            src={strCategoryThumb}
            className="w-64 h-44 py-2"
          />
        </div>
        <div className=" m-4 p-2">
          <h1 className="font-bold">{strCategory}</h1>
          <p>{strCategoryDescription}</p>
        </div>
      </div>
    </Link>
  );
};

export default FoodCard;
