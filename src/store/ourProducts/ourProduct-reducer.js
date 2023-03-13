import {
  ADD_PRODUCTS,
  NEW_PRODUCTS,
  REMOVE_PRODUCTS,
} from "./ourProduct-constants";
import productsData from "../../mock/OurProducts/products.json";

export const productsReducer = (state = productsData, action) => {
  switch (action.type) {
    case ADD_PRODUCTS: {
      return state.map((product) =>
        product.title === action.title
          ? { ...product, count: product.count + 1 }
          : product
      );
    }
    case REMOVE_PRODUCTS: {
      return state.map((product) =>
        product.title === action.title && product.count > 0
          ? { ...product, count: product.count - 1 }
          : product
      );
    }
    case NEW_PRODUCTS: {
      return productsData;
    }
    default: {
      return state;
    }
  }
};
