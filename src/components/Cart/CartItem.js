import React, { useContext } from "react";
import styles from "./CartItem.module.css";
import CartContext from "../../store/cart-context";

const CartItem = (props) => {
  const ctx = useContext(CartContext);
  const onRemoveHandler = () => {
    ctx.removeItem({ name: props.name, amount: 1, price: props.price });
  };
  const onAddHandler = () => {
    ctx.addItem({ name: props.name, amount: 1, price: props.price });
  };
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={styles["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>{price}</span>
          <span className={styles.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={styles.action}>
        <button onClick={onRemoveHandler}>-</button>
        <button onClick={onAddHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
