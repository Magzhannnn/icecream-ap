import { useSelector } from "react-redux";
import { selectProductsModalText } from "../../../../../store/modal/modal-selectors";
import styles from "./PriceOrTotal.module.css";

const PriceOrTotal = (props) => {
  const productsText = useSelector(selectProductsModalText);

  return productsText ? (
    <div className={styles[props.classes]}>{props.number.toFixed(2)}$</div>
  ) : (
    <div className={styles[props.classes]}>{props.number}$</div>
  );
};

export default PriceOrTotal;
