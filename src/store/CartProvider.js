import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const inItem = action.item;
    const total_amount =
      Number(state.totalAmount) + Number(inItem.amount) * Number(inItem.price);
    const index = state.items.findIndex((item) => item?.name === inItem?.name);
    console.log(inItem);
    if (index !== -1) {
      const outItems = [...state.items];
      outItems[index].amount =
        Number(outItems[index].amount) + Number(inItem.amount);
      return {
        items: outItems,
        totalAmount: total_amount,
      };
    }
    return {
      items: [inItem, ...state.items],
      totalAmount: total_amount,
    };
  }
  if (action.type === "REM_ITEM") {
    const inItem = action.item;
    const total_amount =
      Number(state.totalAmount) - Number(inItem.amount) * Number(inItem.price);

    const index = state.items.findIndex((item) => item?.name === inItem?.name);

    if (index !== -1) {
      const outItems = [...state.items];
      outItems[index].amount = Number(outItems[index].amount) - 1;
      return {
        items: outItems.filter((item) => {
          return item.amount > 0;
        }),
        totalAmount: total_amount,
      };
    }
  }

  return defaultCartState;
};

function CartProvider(props) {
  const addItemToCartHandler = (item) => {
    cartContextDispatcher({
      type: "ADD_ITEM",
      item: {
        name: item.name,
        amount: Number(item.amount),
        price: Number(item.price),
      },
    });
  };

  const removeItemFromCartHandler = (item) => {
    cartContextDispatcher({
      type: "REM_ITEM",
      item: {
        name: item.name,
        amount: Number(item.amount),
        price: Number(item.price),
      },
    });
  };

  const [cartContextState, cartContextDispatcher] = useReducer(
    cartReducer,
    defaultCartState
  );

  const cartContext = {
    items: cartContextState.items,
    totalAmount: cartContextState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
export default CartProvider;
