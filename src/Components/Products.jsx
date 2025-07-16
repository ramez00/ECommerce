import star from "../Assets/star.png";

const Products = ({ products }) => {
  return (
    <div>
      <ul style={{ display: "flex", gap: "50px" }}>
        {products.map((product) => (
          <li key={product.Id}>
            <p>
              <span>{product.title}</span>
            </p>
            <p>
              Price :{" "}
              <strong>{Number(product.price).toLocaleString()} L.E.</strong>
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
