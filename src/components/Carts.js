import { Cart } from "./Cart";

export function Carts({
  products,
  setProduct,
  setCartProducts,
  handlerRemoveCart,
}) {
  return (
    <>
      <div>
        <div align="center">
          {products.map((product, id) => (
            <Cart
              key={product.serial}
              product={product}
              setProduct={setProduct}
              setCartProducts={setCartProducts}
              handlerRemoveCart={handlerRemoveCart}
            />
          ))}
        </div>
      </div>
    </>
  );
}
