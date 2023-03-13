import ButtonApp from "../../../Button/ButtonApp/ButtonApp";
import styles from "./BuyFooter.module.css";

const BuyFooter = (props) => {
  return (
    <>
      <div className={styles.mBottom}></div>
      <strong className={styles.textAmount}>
        The total amount you bought: {props.totalAmount}$
      </strong>
      <ButtonApp
        title="Buy Now"
        className="buyIceCream"
        onClick={props.onClick}
      />
    </>
  );
};

export default BuyFooter;
