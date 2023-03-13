import { ADD_ICECREAM, REMOVE_ICECREAM } from "./iceCream-constants";
import iceCreamData from "../../mock/InfoData/iceCreams.json";

export const iceCreamReducer = (state = iceCreamData, action) => {
  switch (action.type) {
    case ADD_ICECREAM: {
      return state.map((iceCream) =>
        iceCream.id === action.id
          ? { ...iceCream, count: iceCream.count + 1 }
          : iceCream
      );
    }
    case REMOVE_ICECREAM: {
      return state.map((iceCream) =>
        iceCream.id === action.id && iceCream.count > 0
          ? { ...iceCream, count: iceCream.count - 1 }
          : iceCream
      );
    }
    default: {
      return state;
    }
  }
};
