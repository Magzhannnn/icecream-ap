import Container from "../../UI/Container/Container";
import styles from "./Info.module.css";
import InfoItem from "./InfoItem/InfoItem";
import infoData from "../../mock/InfoData/infoPageData.json";
import InfoShow from "./InfoShow/InfoShow";

const Info = () => {
  return (
    <>
      <Container className={styles.info}>
        <div className={styles["info-items"]}>
          {infoData.map((infoDataItem) => (
            <InfoItem
              key={infoDataItem.infoIndex}
              infoIndex={infoDataItem.infoIndex}
              title={infoDataItem.title}
              text={infoDataItem.text}
            />
          ))}
        </div>
      </Container>
      <InfoShow />
    </>
  );
};

export default Info;
