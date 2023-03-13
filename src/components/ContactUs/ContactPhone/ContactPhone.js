import styles from "./ContactPhone.module.css";

const ContactPhone = (props) => {
  return (
    <>
      <div className={styles["contact-phone"]}>
        <div className={styles["contact-phone__number"]}>
          You can call this number: {props.phone}
        </div>
        <div className={styles["contact-phone__icon"]}></div>
      </div>
      <hr />
    </>
  );
};

export default ContactPhone;
