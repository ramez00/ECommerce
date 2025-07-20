import React from "react";

const CartItem = ({ cartItem }) => {
  const handelonClick = (item) => {
    console.log(item);
  };
  return (
    <>
      <li key={cartItem.Id}>
        <p>
          <span>{cartItem.title}</span>
        </p>
        <p>
          Price :{" "}
          <strong>{Number(cartItem.price).toLocaleString()} L.E.</strong>
        </p>
        <p>
          InsteadOf :{" "}
          <span style={{ textDecoration: "line-through" }}>
            {Number(cartItem.insteadOf).toLocaleString()}
          </span>
        </p>
        <br />
        <button type="button" onClick={() => handelonClick(cartItem)}>
          Remove from Cart
        </button>
      </li>
    </>
  );
};

export default CartItem;
