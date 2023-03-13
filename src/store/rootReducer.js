import { combineReducers } from "redux";
import { navbarsReducer } from "./activeNavbars/activeNavbar-reducer";
import { contactReducer } from "./contacts/contact-reducer";
import { iceCreamReducer } from "./iceCream/iceCream-reducer";
import { loginReducer } from "./login/login-reducer";
import { modalReducer } from "./modal/modal-reducer";
import { productsReducer } from "./ourProducts/ourProduct-reducer";
import { regReducer } from "./registration/regist-reducer";
import { sliderReducer } from "./slider/slider-reducer";

export const rootReducer = combineReducers({
  login: loginReducer,
  regist: regReducer,
  slider: sliderReducer,
  modal: modalReducer,
  iceCreams: iceCreamReducer,
  products: productsReducer,
  contacts: contactReducer,
  activeNavs: navbarsReducer,
});
