import { Link } from "react-router-dom";
import styles from "./Button.module.css";

const ButtonLink = (props) => {
  return (
    <button
      className={
        props.title === "Login"
          ? `${styles.btn} ${styles.login}`
          : `${styles.btn} ${styles.create}`
      }
    >
      <Link to={props.url} className={styles.link}>
        {props.title}
      </Link>
    </button>
  );
};

export default ButtonLink;
