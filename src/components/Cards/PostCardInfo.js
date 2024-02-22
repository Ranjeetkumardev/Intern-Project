import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../utils/CartSlice";
import usePost from "../../Hooks/usePost";
import Shimmer from "../../utils/Shimmer";

const PostCardInfo = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const postMenu = usePost(postId);
  const cartItems = useSelector((store) => store.cart.items);
  const handleItems = () => {
    dispatch(addItem(cartItems[postId]));
  };
  if (postMenu === null) return <Shimmer />;
  const { title, description, image, price, rating } = postMenu;
  return (
    <div className="flex flex-col justify-center items-center w-screen  bg-gray-200 ">
      <div className="bg-gray-100 my-8  rounded-xl w-5/12 ">
        <div className="flex flex-col justify-center items-center rounded-lg  ">
          <img className="w-full h-64 p-4 " alt="selletcted_IMG" src={image} />
        </div>
        <div className="flex flex-col">
          <p className="m-2 px-2 font-bold ">{title}</p>
          <div>
            <span className="m-2 px-2 font-bold ">{price}</span>
            <span className="m-2 px-2  font-bold">{rating.rate} ⭐</span>
          </div>
        </div>
        <div className="m-2 px-2  w-full">{description}</div>
        <button
          className="bg-gray-900 text-green-400 p-2 w-full font-bold rounded-sm"
          onClick={handleItems}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default PostCardInfo;
