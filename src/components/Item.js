import React, { useState } from "react";

function Item({ name, category }) {
  const [cartStatus, setCartStatus] = useState(false)

  function handleAddToCart() {
    setCartStatus(!cartStatus)
  }

  return (
    <li className={cartStatus ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>{cartStatus ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
