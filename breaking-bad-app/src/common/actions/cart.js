import { ADDCART } from "./index";

export const setCart = (value) => ({
  type: ADDCART,
  payload: { value },
});
