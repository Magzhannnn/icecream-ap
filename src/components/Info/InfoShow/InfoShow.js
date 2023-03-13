import { useDispatch } from "react-redux";
import { addDetailsModal } from "../../../store/modal/modal-actions";
import ButtonApp from "../../../UI/Button/ButtonApp/ButtonApp";
import Container from "../../../UI/Container/Container";
import styles from "./InfoShow.module.css";

const InfoShow = (props) => {
  const dispatch = useDispatch();
  return (
    <Container className={styles.infoShow}>
      <div className={styles["infoShow-left"]}>
        <div className={styles["infoShow-left__title"]}>
          Brown Sugar <br /> Oatmea
        </div>
        <div className={styles["infoShow-left__text"]}>
          Together with McDonald’s, Burger King has grown to become <br />
          synonymous with burgers in the US.Together with McDonald’s, <br />
          Burger King has grown to become synonymous.
        </div>
        <ButtonApp
          title="See Details"
          onClick={() => dispatch(addDetailsModal("See Details"))}
        />
      </div>
      <div className={styles["infoShow-right"]}></div>
    </Container>
  );
};

export default InfoShow;
