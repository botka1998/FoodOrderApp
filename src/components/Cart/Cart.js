import React, { useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

const onRemoveHandler = () => {};
const onAddHandler = () => {};
function Cart(props) {
  const ctx = useContext(CartContext);
  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
  const cartItems = ctx.items;
  const hasItems = cartItems.length > 0;

  const cartItemsList = (
    <ul className={styles["cart-items"]}>
      {cartItems
        .filter((item) => {
          return item.amount > 0;
        })
        .map((item) => (
          <CartItem
            key={Math.random()}
            price={19}
            name={item.name}
            amount={item.amount}
            onRemove={onRemoveHandler}
            onAdd={onAddHandler}
          >
            {item.name}
          </CartItem>
        ))}
    </ul>
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItemsList}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onHideCart} className={styles["button--alt"]}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
}
export default Cart;
