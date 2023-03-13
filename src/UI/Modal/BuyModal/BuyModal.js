import { useDispatch, useSelector } from "react-redux";
import { buyIceCream } from "../../../helpers/buyIceCream";
import { selectAllIceCreams } from "../../../store/iceCream/iceCream-selectors";
import { removeModal } from "../../../store/modal/modal-actions";
import {
  selectBuyModalText,
  selectProductsModalText,
} from "../../../store/modal/modal-selectors";
import { selectProduct } from "../../../store/ourProducts/ourProduct-selectors";
import BuyFooter from "./BuyFooter/BuyFooter";
import BuyIceCreams from "./BuyIceCreams/BuyIceCreams";
import BuyItem from "./BuyItem/BuyItem";
import BuyProducts from "./BuyProducts/BuyProducts";

const BuyModal = () => {
  const dispatch = useDispatch();

  const buyText = useSelector(selectBuyModalText);
  const iceCreams = useSelector(selectAllIceCreams);

  const productText = useSelector(selectProductsModalText);
  const product = useSelector((state) => selectProduct(state, productText));

  let totalAmount = buyText
    ? buyIceCream(iceCreams)
    : (product.count * product.newPrice).toFixed(2);

  const buyIceCreamHandler = () => {
    let messageIceCream = "";
    if (buyText) {
      iceCreams.map((iceCream) => {
        if (iceCream.count !== 0) {
          messageIceCream += `Имя: ${iceCream.name} | Количество: ${
            iceCream.count
          } | Цена: ${iceCream.price}$ | Сумма: ${
            iceCream.count * iceCream.price
          }$\n`;
        }
      });
      alert(
        `Добрый день!!!
Вы купили у нас:

${messageIceCream}
Общая сумма: ${buyIceCream(iceCreams)}$
        `
      );
    }

    if (productText) {
      messageIceCream += `Имя: ${product.title} | Количество: ${
        product.count
      } | Цена: ${product.newPrice.toFixed(2)}$ | Сумма: ${
        product.count * product.newPrice.toFixed(2)
      }$`;

      alert(
        `Добрый день!!!
Вы купили у нас:
${messageIceCream}
Общая сумма: ${product.count * product.newPrice.toFixed(2)}$`
      );
    }

    dispatch(removeModal);
  };

  return (
    <>
      <BuyItem
        number="№"
        name="Name"
        price="Price"
        count="Count"
        total="Total"
      />
      <br />
      {buyText && <BuyIceCreams iceCreams={iceCreams} />}
      {productText && <BuyProducts {...product} />}
      <BuyFooter onClick={buyIceCreamHandler} totalAmount={totalAmount} />
    </>
  );
};

export default BuyModal;
