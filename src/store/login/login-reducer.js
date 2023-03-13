import { LOGIN_OUT, LOGIN_REG, LOGIN_VERIFY } from "./login-contants";

export const loginReducer = (state = 0, action) => {
  switch (action.type) {
    case LOGIN_VERIFY: {
      const users = JSON.parse(localStorage.getItem("state"));
      if (users === null) return (state = -1);

      for (const user of users.regist) {
        if (user.email === action.email && user.password === action.password) {
          
          return (state = 1);
        }
      }
      return (state = -1);
    }
    case LOGIN_OUT: {
      return (state = 0);
    }
    case LOGIN_REG: {
      return (state = 1);
    }
    default: {
      return state;
    }
  }
};
