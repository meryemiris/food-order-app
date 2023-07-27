import { Fragment } from "react";
import AvailableMeals from "./AvaibleMeals";
import MealsSummary from "./MealsSummary";

export default function Meals() {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
}
