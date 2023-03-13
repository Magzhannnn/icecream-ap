import BuyItem from "../BuyItem/BuyItem";

const BuyIceCreams = ({ iceCreams }) => {
  return iceCreams.map((iceCream) => (
    <BuyItem
      key={iceCream.id}
      number={iceCream.id}
      name={iceCream.name}
      price={iceCream.price}
      count={iceCream.count}
      total={iceCream.price * iceCream.count}
    />
  ));
};

export default BuyIceCreams;
