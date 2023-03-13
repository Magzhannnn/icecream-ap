import styles from "./ContactIcon.module.css";

const ContactIcon = () => {
  return (
    <>
      <div className={styles["contact-social"]}>
        <div className={styles["contact-social__whatsapp"]}></div>
        <div className={styles["contact-social__facebook"]}></div>
        <div className={styles["contact-social__instagram"]}></div>
        <div className={styles["contact-social__telegram"]}></div>
        <div className={styles["contact-social__tiktok"]}></div>
        <div className={styles["contact-social__youtube"]}></div>
      </div>
      <hr />
    </>
  );
};

export default ContactIcon;
