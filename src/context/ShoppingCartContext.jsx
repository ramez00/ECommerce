import { createContext, React, useState, useEffect, useContext } from "react";

const ShoppibgCartContext = createContext();

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

export const useShoppingCartContext = () => {
  return useContext(ShoppibgCartContext);
};
