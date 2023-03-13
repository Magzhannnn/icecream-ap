import { NEXT_IMG, PREV_IMG } from "./slider-constants";
import image from "../../mock/image.json";

export const sliderReducer = (state = "icecream1", action) => {
  switch (action.type) {
    case NEXT_IMG: {
      if (action.id === image.length) {
        // console.log(`image_${image[0].title}`);
        return `image_${image[0].title}`;
      }
      //   console.log(`image_${image[action.id].title}`);
      return `image_${image[action.id].title}`;
    }
    case PREV_IMG: {
      if (action.id === 0) {
        //   console.log(`image_${image[image.length - 1].title}`);
        return `image_${image[image.length - 1].title}`;
      }
      action.id -= 1;
      //   console.log(`image_${image[action.id].title}`);
      return `image_${image[action.id].title}`;
    }
    default: {
      if (state.includes("image_")) return state;
      //   console.log(`image_${state}`);
      return `image_${state}`;
    }
  }
};
