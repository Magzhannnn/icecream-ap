import styles from "./Modal.module.css";
import { removeModal } from "../../store/modal/modal-actions";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllModal,
  selectBuyModalText,
  selectDetailsModalText,
  selectModalVisible,
  selectProductsModalText,
} from "../../store/modal/modal-selectors";
import DetailsModal from "./DetailsModal";
import BuyModal from "./BuyModal/BuyModal";

const Modal = () => {
  const detailsText = useSelector(selectDetailsModalText);
  const buyText = useSelector(selectBuyModalText);
  const productsText = useSelector(selectProductsModalText);
  const detailsVisible = useSelector(selectModalVisible);

  const dispatch = useDispatch();

  return (
    detailsVisible && (
      <>
        <div
          className={styles.overlay}
          onClick={() => dispatch(removeModal)}
        ></div>
        <div className={styles.seeDetails}>
          <div className={styles["seeDetails__left"]}></div>
          <div className={styles["seeDetails__center"]}>
            <h1 style={{ textAlign: "center" }}>
              {buyText}
              {detailsText}
              {productsText}
            </h1>
            {detailsText && <DetailsModal />}
            {buyText && <BuyModal />}
            {productsText && <BuyModal />}
          </div>
          <div className={styles["seeDetails__right"]}></div>
        </div>
      </>
    )
  );
};

export default Modal;
