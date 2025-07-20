import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cartItem }) => {
  return (
    <>
      {cartItem.map((product) => (
        <CartItem key={product.Id} cartItem={cartItem} />
      ))}
    </>
  );
};

export default Cart;
