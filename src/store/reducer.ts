import { I_Product } from "../typescript/interfaces";
import * as actionTypes from "./actionTypes";
interface I_Reducer {
  token: string;
  cart: Array<I_Product>;
  user: any;
}

const initState: I_Reducer = {
  token: "",
  cart: [],
  user: "",
};

export const reducer = (state: I_Reducer = initState, action: any) => {
  switch (action.type) {
    case actionTypes.ADD_CART_ITEM:
      console.log("add cart");
      return;
    case actionTypes.REMOVE_CART_ITEM:
      console.log("remove cart");
      return;
    default:
      return state;
  }
};
