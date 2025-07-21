import React, { useContext } from "react";
import CartItem from "./CartItem";
import { useShoppingCartContext } from "../context/ShoppingCartContext";

const Cart = () => {
  const { cartItem } = useShoppingCartContext();
  return (
    <>
      Cart List : {cartItem.length}
      {cartItem.map((product) => (
        <CartItem key={product.Id} cartItem={product} />
      ))}
    </>
  );
};

export default Cart;
