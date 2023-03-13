import styles from "./ButtonApp.module.css";

const ButtonApp = (props) => {
  return (
    <div>
      <a
        href="#"
        className={`${styles["navbar-btn"]} ${styles[props.className]}`}
        onClick={props.onClick}
      >
        {props.title}
      </a>
    </div>
  );
};

export default ButtonApp;
