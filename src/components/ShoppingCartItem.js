import React, { useContext } from "react";
import { ScCartItem, ScCartItemDetails } from "./scParts";
import { CartContext } from "../contexts/CartContext";

const Item = (props) => {
  const { setCart, cart } = useContext(CartContext)
  const removeHandler = (id) => {
    setCart(cart.filter(element => {
      return element.id !== props.id
    }))
  }

  return (
    <ScCartItem>
      <img src={props.image} alt={`${props.title} book`} />
      <ScCartItemDetails>
        <h2>{props.title}</h2>
        <p>$ {props.price}</p>
        <button onClick={removeHandler}>Remove from cart</button>
      </ScCartItemDetails>
    </ScCartItem>
  );
};

export default Item;
