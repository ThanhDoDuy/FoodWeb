import React from "react";
import DUMMY_MEALS from "./DummyMeals";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";
import MealItemForm from "./MealItem/MealItemForm";

const AvailableMeals = (props) => {
  const listMeal = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <ul>
        <Card>{listMeal}</Card>
        <Card>
          <MealItemForm></MealItemForm>
        </Card>
      </ul>
    </section>
  );
};

export default AvailableMeals;
