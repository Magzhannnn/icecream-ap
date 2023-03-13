import { NEXT_IMG, PREV_IMG } from "./slider-constants";

export const nextImage = (id) => ({
  type: NEXT_IMG,
  id
});

export const prevImage = (id) => ({
  type: PREV_IMG,
  id: id - 1,
});
