import { useDispatch } from "react-redux";
import { addIceCream } from "../../../store/iceCream/iceCream-actions";
import { addProductsModal } from "../../../store/modal/modal-actions";
import ButtonApp from "../../../UI/Button/ButtonApp/ButtonApp";
import Container from "../../../UI/Container/Container";
import styles from "./ProductsItemOdd.module.css";

const ProductsItemOdd = (props) => {
  const dispatch = useDispatch();
  return (
    <Container className={styles["product-itemOdd"]}>
      <div
        className={styles[`itemOdd-left__${props.title.split(" ")[0]}`]}
      ></div>
      <div className={styles["itemOdd-right"]}>
        <div className={styles["itemOdd-right__title"]}>{props.title}</div>
        <div className={styles["itemOdd-right__text"]}>
          Bon Au Pain is a pioneer in the healthy fast food scene. Bon Au
          <br />
          Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a
          <br />
          pioneer in the healthy fast food scene.
        </div>
        <div className={styles["itemOdd-right__price"]}>
          <span className={styles["new-price"]}>${props.newPrice}</span>
          <span className={styles["old-price"]}>${props.oldPrice}</span>
        </div>
        <ButtonApp
          title="Buy Now"
          className="our-product"
          onClick={() => dispatch(addProductsModal(props.title))}
        />
      </div>
    </Container>
  );
};

export default ProductsItemOdd;
