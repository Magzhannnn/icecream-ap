import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${styles.btn} ${props.className}`}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

export default Button;
