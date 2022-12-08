import React, { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import styles from "./Meals.module.css";
function Meals(props) {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
}
export default Meals;
