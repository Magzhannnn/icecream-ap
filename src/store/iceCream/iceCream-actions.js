import { REMOVE_MODAL } from "../modal/modal-constants";
import { ADD_ICECREAM, REMOVE_ICECREAM } from "./iceCream-constants";

export const addIceCream = (id) => ({
  type: ADD_ICECREAM,
  id,
});

export const removeIceCream = (id) => ({
  type: REMOVE_ICECREAM,
  id,
});
