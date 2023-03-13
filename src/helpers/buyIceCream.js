export const buyIceCream = (iceCreams, total = 0) => {
  iceCreams.map((iceCream) => (total += iceCream.count * iceCream.price));
  return total;
};
