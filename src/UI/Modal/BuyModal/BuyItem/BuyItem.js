import { useDispatch, useSelector } from "react-redux";
import {
  addIceCream,
  removeIceCream,
} from "../../../../store/iceCream/iceCream-actions";
import {
  selectBuyModalText,
  selectProductsModalText,
} from "../../../../store/modal/modal-selectors";
import {
  addProducts,
  removeProducts,
} from "../../../../store/ourProducts/ourProduct-actions";
import ButtonApp from "../../../Button/ButtonApp/ButtonApp";
import styles from "./BuyItem.module.css";
import PriceOrTotal from "./PriceOrTotal/PriceOrTotal";

const BuyItem = ({ number, name, price, count, total }) => {
  const dispatch = useDispatch();
  const buyText = useSelector(selectBuyModalText);
  const productsText = useSelector(selectProductsModalText);

  const addItemHandler = () => {
    if (buyText) dispatch(addIceCream(number));
    if (productsText) dispatch(addProducts(productsText));
  };

  const removeItemHandler = () => {
    if (buyText) dispatch(removeIceCream(number));
    if (productsText) dispatch(removeProducts(productsText));
  };

  return (
    <div
      className={`${buyText && styles["buy-item"]} ${
        productsText && styles.product
      }`}
    >
      {+number === number ? (
        <>
          {buyText && (
            <div className={styles["buy-item__number"]}>{number}.</div>
          )}
          <div className={styles["buy-item__name"]}>{name}</div>
          <PriceOrTotal classes="buy-item__price" number={price} />
          <div className={styles["buy-item__price"]}>
            {count}
            <ButtonApp
              title="+"
              className="add_icecream"
              onClick={addItemHandler}
            />
            <ButtonApp
              title="-"
              className="remove_icecream"
              onClick={removeItemHandler}
            />
          </div>
          <PriceOrTotal classes="buy-item__total" number={total} />
        </>
      ) : (
        <>
          {buyText && (
            <div className={styles["buy-item__number"]}>{number}</div>
          )}
          <div className={styles["buy-item__name"]}>{name}</div>
          <div className={styles["buy-item__price"]}>{price}</div>
          <div className={styles["buy-item__price"]}>{count}</div>
          <div className={styles["buy-item__total"]}>{total}</div>
        </>
      )}
    </div>
  );
};

export default BuyItem;
