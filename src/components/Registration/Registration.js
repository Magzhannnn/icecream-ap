import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../store/registration/regist-actions";
import { selectAllUser } from "../../store/registration/regist-selectors";
import Button from "../../UI/Button/Button";
import ButtonLink from "../../UI/Button/ButtonLink";
import Card from "../../UI/Card/Card";
import Input from "../../UI/Input/Input";
import styles from "./Registration.module.css";
import { useAuth } from "../../hooks/useAuthInput";
import { logRegist } from "../../store/login/login-actions";
import { addLoginNav } from "../../store/activeNavbars/activeNavbar-actions";

const Registration = () => {
  const [userSign, setUserSign] = useState({
    name: "",
    age: 0,
    email: "",
    password: "",
  });
  const dispatch = useDispatch();


  const UserSignHandler = () => {
    const [isValid, titleErr, titleNumber] = useAuth(userSign, "sign");
    if (!isValid) {
      if (titleNumber === 1)
        setUserSign({
          name: "",
          age: 0,
          email: "",
          password: "",
        });
      alert(titleErr);
      return;
    }

    dispatch(addUser(userSign));
    dispatch(addLoginNav("Home"));
    setUserSign({ name: "", age: 0, email: "", password: "" });
    dispatch(logRegist);
  };

  return (
    <div className={styles.regWrap}>
      <h1 className={styles.titleReg}>Registration</h1>
      <Card className={styles.reg}>
        <Input
          type="name"
          placeholder="Enter name"
          value={userSign.name}
          onChange={(e) => setUserSign({ ...userSign, name: e.target.value })}
        />
        <Input
          type="number"
          min="0"
          max="125"
          value={userSign.age}
          onChange={(e) => setUserSign({ ...userSign, age: +e.target.value })}
        />
        <Input
          type="email"
          placeholder="Enter email"
          value={userSign.email}
          onChange={(e) => setUserSign({ ...userSign, email: e.target.value })}
        />
        <Input
          type="password"
          placeholder="Enter password"
          value={userSign.password}
          onChange={(e) =>
            setUserSign({ ...userSign, password: e.target.value })
          }
        />
        <Button title="Sign in" onClick={UserSignHandler} />
      </Card>
      <ButtonLink url="/login" title="Login" />
    </div>
  );
};

export default Registration;
