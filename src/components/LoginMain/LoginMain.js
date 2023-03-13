import { useSelector } from "react-redux";
import { selectIsValidUserLogin } from "../../store/login/login-selectors";
import Login from "../Login/Login";
import Slider from "../Slider/Slider";
import styles from "./LoginMain.module.css";
import LoginValidMsg from "./LoginValidMsg";

const LoginMain = () => {
  const isValidUserLogin = useSelector(selectIsValidUserLogin);

  return (
    <>
      {isValidUserLogin === -1 && (
        <LoginValidMsg title="Incorrect login or password! Repeat one more time!!!" />
      )}
      {(isValidUserLogin === 0 || isValidUserLogin === -1) && (
        <div className={styles.loginWrap}>
          <Slider />
          <Login />
        </div>
      )}
    </>
  );
};

export default LoginMain;
