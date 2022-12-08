import React, { useContext } from "react";
import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../../store/cart-context";
function MealItemForm(props) {
  const ctx = useContext(CartContext);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const amount = e.target.querySelector("#amount").value;

    ctx.addItem({ name: props.id, amount: amount });
    console.log(ctx.items);
  };
  return (
    <form onSubmit={onSubmitHandler} className={styles["form"]}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
}
export default MealItemForm;
