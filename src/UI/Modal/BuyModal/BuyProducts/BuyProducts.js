import BuyItem from "../BuyItem/BuyItem";
import styles from "./BuyProducts.module.css";

const BuyProducts = ({ id, title, newPrice, count }) => {
  return (
    <>
      <BuyItem
        number={id}
        name={title}
        price={newPrice}
        count={count}
        total={newPrice * count}
        idProduct={id}
      />
      <span className={styles.line1}></span>
      <span className={styles.line2}></span>
      <span className={styles.line3}></span>
    </>
  );
};

export default BuyProducts;
