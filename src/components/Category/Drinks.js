import React, { useState } from "react";
import { useEffect } from "react";
import { DRINKS_API } from "../../utils/constants";
import DrinksCard from "../Cards/DrinksCard";
import Shimmer from "../../utils/Shimmer";
import { Link } from "react-router-dom";

const Drinks = () => {
  const [cokedrinks, setCokedrinks] = useState([]);
  const getDrinks = async () => {
    const data = await fetch(DRINKS_API);
    const json = await data.json();
    //console.log(json.drinks);
    setCokedrinks(json.drinks);
  };

  useEffect(() => {
    getDrinks();
  }, []);
  if (!cokedrinks) return null;
  return cokedrinks.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap justify-center items-center">
      {cokedrinks.map((coke) => (
      
          <DrinksCard drinksInfo={coke} key={coke.idDrink} />
       
      ))}
    </div>
  );
};

export default Drinks;
