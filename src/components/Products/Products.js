import { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllProduct } from "../../store/ourProducts/ourProduct-selectors";
import Title from "../../UI/Title/Title";
import styles from "./Products.module.css";
import ProductsItemEven from "./ProductsItemEven/ProductsItemEven";
import ProductsItemOdd from "./ProductsItemOdd/ProductsItemOdd";
// import productsData from "../../mock/OurProducts/products.json";

const Products = () => {
  const productsData = useSelector(selectAllProduct);
  return (
    <>
      <Title title="Our Products" />
      {productsData.map((product, index) => {
        if (index % 2 === 0) {
          return (
            <ProductsItemOdd
              key={product.id}
              title={product.title}
              newPrice={product.newPrice}
              oldPrice={product.oldPrice}
            />
          );
        } else {
          return (
            <ProductsItemEven
              key={product.id}
              title={product.title}
              newPrice={product.newPrice}
              oldPrice={product.oldPrice}
            />
          );
        }
      })}
    </>
  );
};

export default Products;
