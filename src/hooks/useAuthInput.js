import {
  isValidUserEmail,
  isValidUserPassword,
  isValidUserSign,
} from "../helpers/validUserSign";

export const useAuth = (userData, title) => {
  let titleErr = "";
  if (isValidUserSign(userData)) {
    titleErr = "Есть пустые строки. Введите все данные!!!";
    const titleNumber = 1;
    return [false, titleErr, titleNumber];
  }
  if (isValidUserEmail(userData.email)) {
    titleErr = "Не правильный эл. почта!!!";
    return [false, titleErr];
  }
  if (title === "sign") {
    if (isValidUserPassword(userData.password)) {
      titleErr = "Очень легкий пороль!!!";
      return [false, titleErr];
    }
  }
  return [true];
};

export const useContact = (email) => {
  let titleErr = "";

  if (isValidUserEmail(email)) {
    titleErr = "Не правильный эл. почта!!!";
    return [false, titleErr];
  }
  return [true];
};
