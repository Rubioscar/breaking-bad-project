import { ADDCART } from "../actions/index";

const initialState = 0;

const Cart = (state = initialState, action) => {
  switch (action.type) {
    case ADDCART:
      return action.payload.value;

    default:
      return state;
  }
};

export default Cart;
