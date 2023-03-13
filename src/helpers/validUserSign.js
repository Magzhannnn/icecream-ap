import passwordNoValid from "../mock/Password/passwordNotHard.json";
import passwordUnSymbol from "../mock/Password/passwordUnSymbol.json";

export const isValidUserSign = (userData) =>
  userData.name === "" || userData.password === "" || userData.email === "";

export const isValidUserEmail = (userEmail) =>
  !userEmail.includes("@gmail.com") &&
  !userEmail.includes("@mail.ru") &&
  !userEmail.includes("@yandex.ru");

const arraySearch = (inputValue, arrayPasswordData) => {
  for (const item of arrayPasswordData) {
    if (inputValue.includes(item)) {
      return true;
    }
  }
}
export const isValidUserPassword = (userPassword) => {
  const notValid = !passwordNoValid.includes(userPassword);
  const userPaswordLength = userPassword.length > 7;
  const numberValid = arraySearch(userPassword, passwordUnSymbol[0].number);
  const symbolValid = arraySearch(userPassword, passwordUnSymbol[0].symbol);

  // for (const item of passwordUnSymbol[0].number) {
  //   if (userPassword.includes(item)) {
  //     numberValid = true;
  //     break;
  //   }
  // }
  // for (const item of passwordUnSymbol[0].symbol) {
  //   if (userPassword.includes(item)) {
  //     symbolValid = true;
  //     break;
  //   }
  // }

  // console.log(userPassword);
  // console.log("passwordNoValid: ", notValid);
  // console.log("passwordUnSymbol number: ", numberValid);
  // console.log("passwordUnSymbol symbol: ", symbolValid);
  // console.log("length: ", userPaswordLength);

  return !(notValid && numberValid && symbolValid && userPaswordLength);
};
