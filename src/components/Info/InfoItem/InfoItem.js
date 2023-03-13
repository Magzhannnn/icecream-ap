import styles from "./InfoItem.module.css";

const InfoItem = (props) => {
  return (
    <div className={styles["info-item"]}>
      <div className={styles[`info-item__img${props.infoIndex}`]}></div>
      <div className={styles["info-item__title"]}>{props.title}</div>
      <div className={styles["info-item__text"]}>{props.text}</div>
    </div>
  );
};

export default InfoItem;
