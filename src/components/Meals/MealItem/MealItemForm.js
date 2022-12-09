import React, { useContext, useRef, useState } from "react";
import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../../store/cart-context";

function MealItemForm(props) {
  const ctx = useContext(CartContext);
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;

    if (enteredAmount.trim().length === 0) {
      setAmountIsValid(false);
      return;
    }
    setAmountIsValid(true);
    ctx.addItem({ name: props.id, amount: enteredAmount });
  };

  return (
    <form onSubmit={onSubmitHandler} className={styles["form"]}>
      <Input
        ref={amountInputRef}
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
      {!amountIsValid && <p>Please enter a valid amount</p>}
    </form>
  );
}
export default MealItemForm;
