import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Info from "../components/Info/Info";
import LoginMain from "../components/LoginMain/LoginMain";
import Registration from "../components/Registration/Registration";
import Products from "../components/Products/Products";
import { selectIsValidUserLogin } from "../store/login/login-selectors";
import ContactUs from "../components/ContactUs/ContactUs";

const AppRouter = () => {
  const isLoginVal = useSelector(selectIsValidUserLogin);

  return (
    <Routes>
      {(isLoginVal === 0 || isLoginVal === -1) && (
        <>
          <Route path="/login" element={<LoginMain />} />
          <Route path="/reg" element={<Registration />} />
          <Route path="/*" element={<Navigate to="/login" />} />
        </>
      )}
      {isLoginVal === 1 && (
        <>
          <Route path="/home" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/pricing" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/*" element={<Navigate to="/home" />} />
        </>
      )}
    </Routes>
  );
};

export default AppRouter;
