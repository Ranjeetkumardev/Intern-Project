import React from "react";
import { Link } from "react-router-dom";

const DrinksCard = ({ drinksInfo }) => {
  const { idDrink, strCategory, strDrinkThumb, strInstructions } = drinksInfo;
  // console.log(drinksInfo);
  const truncate = (str, max, len) => {
    return str.length > max ? str.substring(0, len) + "..." : str;
  };
  return (
    <Link to={"/drinksCardInfo/" + idDrink}>
      <div className=" m-4 overflow-hidden bg-white-100 bg-white-100 hover:shadow-xl w-72 h-72 rounded-lg shadow">
        <div className="flex flex-col justify-center items-center ">
          <img alt="Dinks_IMG" src={strDrinkThumb} className="w-64 h-44 py-2" />
        </div>
        <div className=" m-4 p-2">
          <h1 className="font-bold">{strCategory}</h1>
          <p>{truncate(strInstructions, 50, 20)}</p>
        </div>
      </div>
    </Link>
  );
};

export default DrinksCard;
