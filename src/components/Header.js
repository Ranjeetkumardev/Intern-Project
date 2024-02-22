import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
 // console.log(cartItems)
  return (
    <div className="grid grid-flow-col bg-white items-center  shadow-sm h-20 sticky top-0 left-0 right-0 z-10 w-screen">
      <div className="flex col-span-1">
        <Link to="/">
          <img
            className="w-16 ml-8 "
            alt="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoMndX0vyACd7r9idEj0oQwZfy8wRNILNW0w&usqp=CAU"
          />
        </Link>
      </div>
      <div className="col-span-8  px-10">
        <input
          className="w-2/3 border rounded-l-3xl border-gray-400 p-2 ml-16"
          type="text"
          placeholder="Search"
        />
        <button className="border rounded-r-3xl border-gray-400 px-5 py-2 bg-gray-100">
          🔍
        </button>
      </div>
      <div className="flex col-span-3 justify-evenly items-center mt-0">
        <Link to="/login">
          <div className="flex border border-gray-200 py-2 rounded">
            <span>
              <img
                className="w-8 mx-2"
                alt="user"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUzmQxwKnYnWrAuIfaKoy_ojWhGy0-KZlH7fOkAU5WMH2D2OGafm6wsSSR0LJW--Es064&usqp=CAU"
              />
            </span>
            <span className="mr-3 font-medium">Login</span>
          </div>
        </Link>
        <Link to="/cart">
          <div className="flex items-center py-2  ">
            <span className="flex flex-col">
              <img
                className="w-10 h-10 "
                alt="cart"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNraQYt-UnDEECjSFLn1m_veBdjlYOABi-RQZTScErajTccm145KdHu1g8I1bljutGAp8&usqp=CAU"
              />
            </span>
            <span className="font-medium mb-8 ">
              {cartItems.length === 0 ? null : cartItems.length}
            </span>
            <span className=" font-medium mx-2">Cart</span>
          </div>
        </Link>

        <Link to="/seller">
          <div className="flex items-center py-2  ">
            <span>
              <img
                className="w-8 h-8"
                alt="seller"
                src="https://cdn-icons-png.flaticon.com/512/3443/3443338.png"
              />
            </span>
            <span className="mx-2 font-medium">Become a Seller </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
