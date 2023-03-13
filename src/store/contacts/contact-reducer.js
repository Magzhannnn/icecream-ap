import { ADD_CONTACT } from "./contact-actions";

export const contactReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CONTACT: {
      let stock = true;
      for (const email of state) {
        if (email === action.email) {
          stock = false;
          break;
        }
      }
      return stock ? [...state, action.email] : state;
    }
    default: {
      return state;
    }
  }
};
