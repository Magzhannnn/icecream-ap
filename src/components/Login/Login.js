import { useState } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/useAuthInput";
import { addLoginNav } from "../../store/activeNavbars/activeNavbar-actions";
import { loginVerify } from "../../store/login/login-actions";
import Button from "../../UI/Button/Button";
import ButtonLink from "../../UI/Button/ButtonLink";
import Card from "../../UI/Card/Card";
import Input from "../../UI/Input/Input";
import styles from "./Login.module.css";

const Login = () => {
  const [userLogin, setUserLogin] = useState({ email: "", password: "" });

  const dispatch = useDispatch();

  const UserLoginHandler = (e) => {
    e.preventDefault();
    const [isValid, titleErr, titleNumber] = useAuth(userLogin, "login");
    if (!isValid) {
      if (titleNumber === 1) setUserLogin({ email: "", password: "" });
      alert(titleErr);
      return;
    }
    dispatch(loginVerify(userLogin.email, userLogin.password));
    dispatch(addLoginNav("Home"));
    setUserLogin({ email: "", password: "" });
  };

  return (
    <div>
      <Card className={styles.login}>
        <Input
          type="email"
          placeholder="Enter email"
          value={userLogin.email}
          onChange={(e) =>
            setUserLogin({ ...userLogin, email: e.target.value })
          }
        />
        <Input
          type="password"
          placeholder="Enter password"
          value={userLogin.password}
          onChange={(e) =>
            setUserLogin({ ...userLogin, password: e.target.value })
          }
        />
        <Button btnClass="btn" title="Sign in" onClick={UserLoginHandler} />
      </Card>
      <ButtonLink url="/reg" title="Create an account" />
    </div>
  ); 
};

export default Login;
