import { Product } from "./Product";

const Products = ({ products, setSelectedItem }) => {
  return (
    <div>
      <ul style={{ display: "flex", gap: "50px" }}>
        {products.map((product) => (
          <Product
            key={product.Id}
            product={product}
            setSelectedItem={setSelectedItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default Products;
