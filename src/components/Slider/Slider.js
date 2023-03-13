import styles from "./Slider.module.css";
import images from "../../mock/image.json";
import SliderItem from "./SliderItem/SliderItem";

const Slider = () => {
  return (
    <div className={styles.slider}>
      {/* <SliderItem idImg={0} /> */}
      {images.map((image) => (
        <SliderItem
          idImg={image.id}
          key={image.id}
          imageTitle={image.title}
          imageLength={images.length}
        />
      ))}
    </div>
  );
};

export default Slider;
