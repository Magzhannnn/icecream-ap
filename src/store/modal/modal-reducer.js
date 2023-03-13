import { ADD_BUY_MODAL, DETAILS_MODAL, PRODUCTS_MODAL, REMOVE_MODAL } from "./modal-constants";

export const modalReducer = (state = "", action) => {
  switch (action.type) {
    case ADD_BUY_MODAL: {
      return { buyText: action.text, visible: true };
    }
    case DETAILS_MODAL: {
      return { detailsText: action.text, visible: true };
    }
    case PRODUCTS_MODAL: {
      return { productsText: action.text, visible: true };
    }
    case REMOVE_MODAL: {
      return { text: "", visible: false };
    }
    default: {
      return state;
    }
  }
};
