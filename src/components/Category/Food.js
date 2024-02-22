import React, { useState } from "react";
import { useEffect } from "react";
import { FOOD_API } from "../../utils/constants";
import Shimmer from "../../utils/Shimmer";
import FoodCard from "../Cards/FoodCard";

const Food = () => {
  const [Foods, setFoods] = useState([]);
  const getFoods = async () => {
    const data = await fetch(FOOD_API);
    const json = await data.json();
     console.log(json.categories);
    setFoods(json.categories);
  };

  useEffect(() => {
    getFoods();
  }, []);
  if (!Foods) return null;
  return Foods.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap justify-center items-center">
      {Foods.map((food) => (
        <FoodCard foodInfo={food} key={food.id} />
      ))}
    </div>
  );
};

export default Food;
