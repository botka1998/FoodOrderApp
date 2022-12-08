import styles from "./HeaderCardButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
function HeaderCardButton(props) {
  const ctx = useContext(CartContext);
  const numCart = ctx.items.reduce((acc, item) => {
    return acc + Number(item.amount);
  }, 0);
  return (
    <button onClick={props.onShowCart} className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>{props.children}</span>
      <span className={styles.items} value={numCart}>
        {numCart}
      </span>
    </button>
  );
}
export default HeaderCardButton;
