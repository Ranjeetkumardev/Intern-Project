import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Shimmer from "../../utils/Shimmer";
import { addItem } from "../../utils/CartSlice";
import useFood from "../../Hooks/useFood";

const FoodCardInfo = () => {
  const dispatch = useDispatch();
  const { foodId } = useParams();
  const FoodMenu = useFood(foodId);
  // console.log(foodId);
  const fetchedpost = useSelector((store) => store.cart.items);
  const handleItems = () => {
    dispatch(addItem(fetchedpost[foodId]));
  };
  if (FoodMenu === null) return <Shimmer />;
  const { id, title, price, description, category, image, rating } = FoodMenu;
  return (
    <div className="flex flex-col justify-center items-center w-screen  bg-gray-200 ">
      {/* <div className=" bg-gray-100 my-8  rounded-xl ">
        <div className="flex flex-col justify-center items-center rounded-lg">
          <img alt="fetched_IMG" src={image} className="w-full h-64 p-4 " />
        </div>
        <div className="flex flex-col">
          <span className="m-2 px-2  font-bold"> {title}</span>
          <span className="p-2">{price}</span>
          <span className="p-2">{rating.rate}</span>
        </div>
        <div>
          <button
            className="bg-gray-900 text-green-400 p-2 w-full font-bold rounded-sm"
            onClick={handleItems}
          >
            Add to Cart
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default FoodCardInfo;
