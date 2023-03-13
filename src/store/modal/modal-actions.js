import {
  ADD_BUY_MODAL,
  DETAILS_MODAL,
  PRODUCTS_MODAL,
  REMOVE_MODAL,
} from "./modal-constants";

export const addBuyModal = (text) => ({
  type: ADD_BUY_MODAL,
  text,
});

export const addDetailsModal = (text) => ({
  type: DETAILS_MODAL,
  text,
});

export const addProductsModal = (text) => ({
  type: PRODUCTS_MODAL,
  text,
});

export const removeModal = {
  type: REMOVE_MODAL,
};
