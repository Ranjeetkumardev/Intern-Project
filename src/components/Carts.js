import React from "react";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";

const Carts = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
 // const {} = fetchedpost;
    const handleClearCart = () => {
        
    }
    const handlePayment = () => {};
  return (
    <div>
      <h1 className="font-bold text-2xl">Cart Items </h1>
      <button
        className="m-2 p-2 bg-pink-200 rounded-md font-bold"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      <button
        className="m-2 p-2 bg-pink-200 rounded-md font-bold"
        onClick={() => handlePayment()}
      >
        make payment
      </button>
      {/* <div className="flex flex-wrap">
        {cartItems.map((item) => (
          <CartItems key={item.card.info.id} {...item.card.info} />
        ))}
      </div> */}
    </div>
  );
};

export default Carts;
