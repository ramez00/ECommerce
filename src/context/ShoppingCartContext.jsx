import { createContext, React, useState, useEffect } from "react";

export const ShoppibgCartContext = createContext();

let cachedItems = localStorage.getItem("cartItem")
  ? JSON.parse(localStorage.getItem("cartItem"))
  : [];

export const ShoppingCartContextProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState(cachedItems);
  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  }, [cartItem]);

  return (
    <ShoppibgCartContext.Provider value={{ cartItem, setCartItem }}>
      {children}
    </ShoppibgCartContext.Provider>
  );
};

export default ShoppingCartContextProvider;
