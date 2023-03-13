import { useDispatch, useSelector } from "react-redux";
import { nextImage, prevImage } from "../../../store/slider/slider-actions";
import { selectSliderImage } from "../../../store/slider/slider-selectors";
import styles from "./SliderItem.module.css";

const SliderItem = (props) => {
  const dispatch = useDispatch();
  const sliderData = useSelector(selectSliderImage);
  let classes = styles[`image_${props.imageTitle}`];

  if (sliderData === `image_${props.imageTitle}`) {
    classes = `${styles[sliderData]} ${styles.activateSlider}`;
  }

  const doteActiveProcent = props.imageLength - props.idImg;
  const doteActive1 =
    doteActiveProcent >= 10 && doteActiveProcent <= 13 ? "active1" : "";
  const doteActive2 =
    doteActiveProcent >= 7 && doteActiveProcent < 10 ? "active2" : "";
  const doteActive3 =
    doteActiveProcent >= 4 && doteActiveProcent < 7 ? "active3" : "";
    const doteActive4 =
      doteActiveProcent >= 0 && doteActiveProcent < 4 ? "active4" : "";

  return (
    <div className={classes}>
      <div
        className={styles.left}
        onClick={() => dispatch(prevImage(props.idImg))}
      >
        {"<"}
      </div>
      <div
        className={styles.right}
        onClick={() => dispatch(nextImage(props.idImg))}
      >
        {">"}
      </div>
      <div className={styles.dotLst}>
        <div className={`${styles.dote} ${styles[`${doteActive1}`]}`}></div>
        <div className={`${styles.dote} ${styles[`${doteActive2}`]}`}></div>
        <div className={`${styles.dote} ${styles[`${doteActive3}`]}`}></div>
        <div className={`${styles.dote} ${styles[`${doteActive4}`]}`}></div>
      </div>
    </div>
  );
};

export default SliderItem;
