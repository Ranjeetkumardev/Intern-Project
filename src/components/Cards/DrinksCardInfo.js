import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import useDrinkMenu from "../../Hooks/useDrinkMenu";
import Shimmer from "../../utils/Shimmer";
import { addItem } from "../../utils/CartSlice";

const DrinksCardInfo = () => {
  const dispatch = useDispatch();
  const { drinkId } = useParams();
  const drinksMenu = useDrinkMenu(drinkId);
  // console.log(drinkId);
  const fetchedpost = useSelector((store) => store.cart.items);
  const handleItems = () => {
    dispatch(addItem(fetchedpost[drinkId]));
  };
  if (drinksMenu === null) return <Shimmer />;
  const { strCategory, strDrinkThumb, strInstructions } = drinksMenu.drinks[0];
  return (
    <div className="flex flex-col justify-center items-center w-screen  bg-gray-200 ">
      <div className=" bg-gray-100 my-8  rounded-xl ">
        <div className="flex flex-col justify-center items-center rounded-lg">
          <img
            alt="fetched_IMG"
            src={strDrinkThumb}
            className="w-full h-64 p-4 "
          />
        </div>
        <div className="flex flex-col">
          <span className="m-2 px-2  font-bold"> {strCategory}</span>
          <span className="p-2">{strInstructions}</span>
          <button
            className="bg-gray-900 text-green-400 p-2 w-full font-bold rounded-sm"
            onClick={handleItems}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default DrinksCardInfo;
