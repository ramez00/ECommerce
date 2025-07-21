import star from "../Assets/star.png";
import toast from "react-hot-toast";
import { useShoppingCartContext } from "../context/ShoppingCartContext";

export const Product = ({ product }) => {
  const { setCartItem } = useShoppingCartContext();

  const handelonClick = (product) => {
    toast("Product added to Cart");
    setCartItem((prev) => {
      return [...prev, product];
    });
  };

  return (
    <li key={product.Id}>
      <p>
        <span>{product.title}</span>
      </p>
      <p>
        Price : <strong>{Number(product.price).toLocaleString()} L.E.</strong>
      </p>
      <p>
        InsteadOf :{" "}
        <span style={{ textDecoration: "line-through" }}>
          {Number(product.insteadOf).toLocaleString()}
        </span>
      </p>
      <span>
        Rate :
        {Array(product.rate)
          .fill(0)
          .map((_, index) => (
            <img key={index} src={star} height="16px" width="16px" />
          ))}
      </span>
      <br />
      <button type="button" onClick={() => handelonClick(product)}>
        Add to Cart
      </button>
    </li>
  );
};
