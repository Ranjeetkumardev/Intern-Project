import { useEffect, useState } from "react";
import { FOOD_INFO_API } from "../utils/constants";
// this is a custome Hooks
const useFood = (foodId) => {
  const [FoodMenu, setFoodMenu] = useState(null);
  useEffect(() => {
    getFoodMenuInfo();
  }, []);

  async function getFoodMenuInfo() {
    const data = await fetch(FOOD_INFO_API + foodId);
    const json = await data.json();
    // console.log(json.categories);
    setFoodMenu(json);
  }
  return FoodMenu;
};

export default useFood;
