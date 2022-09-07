import React, { useState } from "react";

function Item({ name, category }) {

  const [isAdded, toggleIsAdded] = useState(false)
  const buttonClassName = isAdded === false ? "add" : "in-cart"
  const buttonText = isAdded === false ? "Add to Cart" : "Remove from Cart"

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClassName}
        onClick={()=>toggleIsAdded(!isAdded)}>{buttonText}
      </button>
    </li>
  );
}

export default Item;
