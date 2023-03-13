import Container from "../../UI/Container/Container";
import Title from "../../UI/Title/Title";
import ContactEmail from "./ContactEmail/ContactEmail";
import ContactIcon from "./ContactIcon/ContactIcon";
import ContactPhone from "./ContactPhone/ContactPhone";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <Container className={styles.contact}>
      <Title title="Contact Us" />
      <ContactEmail />
      <ContactPhone phone="87756541217" />
      <ContactIcon />
      <div className={styles["contact-map"]}>
        We are located: Wall Street, 15
      </div>
    </Container>
  );
};

export default ContactUs;
