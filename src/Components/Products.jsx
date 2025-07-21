import { useContext } from "react";
import { Product } from "./Product";
const Products = ({ products }) => {
  return (
    <div>
      <ul style={{ display: "flex", gap: "50px" }}>
        {products.map((product) => (
          <Product key={product.Id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default Products;
