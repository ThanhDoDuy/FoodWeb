import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItem = [{ id: "c1", name: "hahe", des: "bb", price: 45 }].map(
    (cartItem) => (
      <ul>
        <li>{cartItem.name}</li>
      </ul>
    )
  );
  return (
    <Modal>
      {cartItem}
      <div className={classes.total}>
        <span>Total Price</span>
        <span>1234</span>
      </div>

      <div className={classes.actions}>
        <button className={classes[".button--alt"]}>Close</button>
        <button className={classes["button"]}>Other</button>
      </div>
    </Modal>
  );
};

export default Cart;
