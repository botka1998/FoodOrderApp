import styles from "./HeaderCardButton.module.css";
import CartIcon from "../Cart/CartIcon";
function HeaderCardButton(props) {
  return (
    <button onClick={props.onShowCart} className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>{props.children}</span>
      <span className={styles.items}>3</span>
    </button>
  );
}
export default HeaderCardButton;
