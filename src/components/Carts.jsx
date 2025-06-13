import React from "react";
import { Cart } from "./Cart";

export function Carts({
  cartProducts,
  products,
  setProduct,
  setProducts,
  setCartProducts,
  handlerRemoveCart,
}) {
  let all = products.filter((product) => product.inCart === true);
  let price = 0;
  all.map((p) => (price = Number(price + p.price * p.cart)));

  return (
    <>
      <div>
        <div align="center">
          {cartProducts.map((product) => (
            <React.Fragment key={product.id}>
              <Cart
                prop={product.id}
                product={product}
                products={products}
                setProduct={setProduct}
                setProducts={setProducts}
                setCartProducts={setCartProducts}
                handlerRemoveCart={handlerRemoveCart}
                cartProducts={cartProducts}
              />
            </React.Fragment>
          ))}
        </div>
        <hr></hr>
        <div align="center">Price of all: {price}</div>
      </div>
    </>
  );
}
