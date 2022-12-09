import styles from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import React, { useContext } from "react";
function Cart(props) {
  // const cartItems = (
  //   <ul className={styles["cart-items"]}>
  //     {[{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map((item) => (
  //       <li key={Math.random()}>{item.name}</li>
  //     ))}
  //   </ul>
  // );
  const ctx = useContext(CartContext);
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {ctx.items.map((item) => (
        <li key={Math.random()}>{item.name}</li>
      ))}
    </ul>
  );
  console.log(ctx);
  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onHideCart} className={styles["button--alt"]}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
}
export default Cart;
