import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const inItem = action.item;
    // if (state.items.contains(inItem)) {
    //   console.log(inItem);
    // }
    console.log(inItem);
    const index = state.items.findIndex((item) => item?.name === inItem?.name);
    console.log(index);
    if (index !== -1) {
      console.log(state.items);

      const outItems = [...state.items];
      outItems[index].amount =
        Number(outItems[index].amount) + Number(inItem.amount);
      return {
        items: outItems,
        totalAmount: 0,
      };
    }
    return {
      items: [action.item, ...state.items],
      totalAmount: 0,
      //   addItem: addItemToCartHandler,
      //   removeItem: removeItemToCartHandler,
    };
  }

  return defaultCartState;
};

function CartProvider(props) {
  const addItemToCartHandler = (item) => {
    // cartContext.items.push({ item: item.name, amount: item.amount });
    cartContextDispatcher({
      type: "ADD_ITEM",
      item: {
        name: item.name,
        amount: item.amount,
      },
    });
  };

  const removeItemToCartHandler = (id) => {
    cartContextDispatcher({
      type: "REM_ITEM",
      id: id,
    });
  };

  const [cartContextState, cartContextDispatcher] = useReducer(
    cartReducer,
    defaultCartState
  );

  const cartContext = {
    items: cartContextState.items,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
export default CartProvider;
