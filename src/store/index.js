import { useEffect } from "react";
import { createStore } from "redux";
import { rootReducer } from "./rootReducer";
import { loadState, saveState } from "./local-storage";
import throttle from "lodash/throttle";

export const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.subscribe(
    throttle(() => {
      saveState({
        regist: store.getState().regist,
        login: store.getState().login,
        activeNavs: store.getState().activeNavs,
      });
    }, 100)
  );

  return store;
};
