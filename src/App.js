import { useEffect, useState } from "react";
import Products from "./Components/Products";

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

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
      {!isLoading && products && <Products products={products} />}
    </>
  );
}

export default App;
