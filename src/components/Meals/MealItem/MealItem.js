import React from "react";
import MealItemForm from "./MealItemForm";
import styles from "./MealItem.module.css";
function MealItem(props) {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li>
      <div>
        <h3>{props.name}</h3>
        <div>{props.description}</div>
        <div>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.name} />
      </div>
    </li>
  );
}
export default MealItem;
