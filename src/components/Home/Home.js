import { useDispatch } from "react-redux";
import { addBuyModal } from "../../store/modal/modal-actions";
import ButtonApp from "../../UI/Button/ButtonApp/ButtonApp";
import Container from "../../UI/Container/Container";
import styles from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <Container className={styles.home}>
      <div className={styles["home-left"]}>
        <div className={styles["home-left__title"]}>
          Sweet fun, full of milk.
        </div>
        <div className={styles["home-left__subtitle"]}>
          Feel inside cold with our delicious <span>ice-cream.</span>
        </div>
        <div className={styles["home-left__text"]}>
          Some food has looked so awful that it's looked like something that the
          dog's brought home, yet after one mouthful I've been left eating my
          thoughts, my words.
        </div>
        <ButtonApp
          title="Buy Now"
          onClick={() => dispatch(addBuyModal("Buy Now"))}
        />
      </div>
      <div className={styles["home-right__img1"]}></div>
    </Container>
  );
};

export default Home;
