import React, { Fragment } from "react";

import classes from "./Header.module.css";
import mealImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-img"]}>
        <img src={mealImage} alt="A table of meal" />
      </div>
    </Fragment>
  );
};

export default Header;
