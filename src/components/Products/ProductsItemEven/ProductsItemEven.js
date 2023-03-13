import { useDispatch } from "react-redux";
import { addProductsModal } from "../../../store/modal/modal-actions";
import ButtonApp from "../../../UI/Button/ButtonApp/ButtonApp";
import Container from "../../../UI/Container/Container";
import styles from "./ProductsItemEven.module.css";

const ProductsItemEven = (props) => {
  const dispatch = useDispatch();
  return (
    <Container className={styles["product-itemOdd"]}>
      <div className={styles["itemOdd-left"]}>
        <div className={styles["itemOdd-left__title"]}>{props.title}</div>
        <div className={styles["itemOdd-left__text"]}>
          Bon Au Pain is a pioneer in the healthy fast food scene. Bon Au
          <br />
          Pain is a pioneer in the healthy fast food scene.Bon Au Pain is
          <br /> a pioneer in the healthy fast food scene.
        </div>
        <div className={styles["itemOdd-left__price"]}>
          <span className={styles["new-price"]}>${props.newPrice}</span>
          <span className={styles["old-price"]}>${props.oldPrice}</span>
        </div>
        <ButtonApp
          title="Buy Now"
          className="our-product"
          onClick={() => dispatch(addProductsModal(props.title))}
        />
      </div>
      <div
        className={styles[`itemOdd-right__${props.title.split(" ")[0]}`]}
      ></div>
    </Container>
  );
};

export default ProductsItemEven;
