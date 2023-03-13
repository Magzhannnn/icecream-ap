import { LOGIN_OUT, LOGIN_REG, LOGIN_VERIFY } from "./login-contants";

export const loginVerify = (email, password) => ({
  type: LOGIN_VERIFY,
  email: email,
  password: password,
});

export const logOut = {
  type: LOGIN_OUT,
};

export const logRegist = {
  type: LOGIN_REG,
};
