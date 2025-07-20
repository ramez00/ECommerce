import { useEffect, useState } from "react";
import Products from "./Components/Products";
import Cart from "./Components/Cart";

function App() {
  const allProducts = [
    {
      Id: 1,
      title: "Keyboard",
      rate: 4,
      price: 4500,
      insteadOf: 5500,
    },
    {
      Id: 2,
      title: "Mouse",
      rate: 4,
      price: 350,
      insteadOf: 400,
    },
    {
      Id: 3,
      title: "Screen",
      rate: 5,
      price: 4500,
      insteadOf: 5500,
    },
    {
      id: 4,
      title: "Laptop",
      rate: 3,
      price: 12000,
      insteadOf: 15000,
    },
  ];

  let cachedItems = localStorage.getItem("cartItem")
    ? JSON.stringify(localStorage.getItem("cartItem"))
    : [];

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState(cachedItems);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      await new Promise((resolve) =>
        setTimeout(resolve, Math.random() * 6000 + 500)
      );
      setProducts(allProducts);
      setIsLoading(false);
    };
    getData();
  }, []);

  return (
    <>
      <h1>Hello React</h1>
      {isLoading && <p>Loading....</p>}
      {!isLoading && products && (
        <Products products={products} setSelectedItem={setSelectedItem} />
      )}
      Cart Item : {cachedItems.length}
      <Cart cartItem={selectedItem} />
    </>
  );
}

export default App;
