import { useEffect, useState } from "react";
import { DRINKS_INFO_API } from "../utils/constants";
// this is a custome Hooks
const useDrinkMenu = (drinkId) => {
 // console.log(drinkId);
  const [drinksMenu, setdrinksMenu] = useState(null);
  useEffect(() => {
    getdrinksMenuInfo();
  }, []);

  async function getdrinksMenuInfo() {
    const data = await fetch(DRINKS_INFO_API + drinkId);
    const json = await data.json();
   // console.log(json.drinks);
    setdrinksMenu(json);
  }
  return drinksMenu;
};

export default useDrinkMenu;
