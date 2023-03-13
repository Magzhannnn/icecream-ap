export const selectAllProduct = (state) => state.products;
export const selectProduct = (state, title) => {
  for (const product of state.products)
    if (product.title === title) return product;
};
