import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useContact } from "../../../hooks/useAuthInput";
import { addContact } from "../../../store/contacts/contact-actions";
import { selectContact } from "../../../store/contacts/contact-selectors";
import Button from "../../../UI/Button/Button";
import Input from "../../../UI/Input/Input";
import styles from "./ContactEmail.module.css";

const ContactEmail = () => {
  const [email, setEmail] = useState("");
  const [load, setLoad] = useState(false);

  const dispatch = useDispatch();
  const contacts = useSelector(selectContact);

  useEffect(() => {
    //console.log(`Contacts: ${contacts}`);
  }, [load]);

  const useContactHandler = () => {
    const [contactValid, textContactValid] = useContact(email);

    if (contactValid) {
      alert(`Congratulations!!!
We will send an e-mail around 23 hours!!!`);
      dispatch(addContact(email));

      setLoad(!load);
      setEmail("");
    } else {
      alert(textContactValid);
    }
  };

  return (
    <>
      <div className={styles["contact-email"]}>
        <Input
          className={styles["contact-email__input"]}
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          title="Send"
          onClick={useContactHandler}
          className={styles["contact-btn"]}
        />
      </div>
      <hr />
    </>
  );
};

export default ContactEmail;
