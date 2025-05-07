import { useState } from "react";
import "./App.css";
import { initialProducts } from "./data/data";
import { Carts } from "./components/Carts";
import { CartButton } from "./components/CartButton";
import { Products } from "./components/Products";

export function App() {
  const [products, setProducts] = useState(initialProducts);
  const [isCart, setIsCart] = useState(false);
  //const pcart = products.filter((product) => product.inCart === true);
  const [cartProducts, setCartProducts] = useState();
  // const allProducts = products.filter((product) => product.inCart === false);
  const allProducts = products.filter((product) => product);
  const [product, setProduct] = useState();

  let cartOk = cartProducts?.length;

  function handlerRemoveCart(serial) {
    alert(serial);

    let all = cartProducts?.map((p) => p).filter((p) => p.serial !== serial);
    setCartProducts(all);
  }

  function handlerAddCart() {
    product.inCart = true;

    if (cartOk) {
      cartProducts.map(
        (p, id) =>
          p.serial !== product.serial &&
          setCartProducts([...cartProducts, product])
      );
    } else {
      setCartProducts([product]);
    }
  }

  function showCart() {
    setIsCart(true);
  }

  function hideCart() {
    setIsCart(false);
  }

  return (
    <>
      <div className="App">
        <h1>Shopping Cart</h1>
        {isCart && (
          <div>
            <CartButton handler={hideCart}>Hide Cart</CartButton>
            {cartOk ? (
              <Carts
                products={cartProducts}
                setCartProducts={setCartProducts}
                setProduct={setProduct}
                handlerRemoveCart={handlerRemoveCart}
              />
            ) : (
              ""
            )}
          </div>
        )}

        {!isCart && (
          <div>
            <CartButton handler={showCart}>Show Cart</CartButton>
            <Products
              products={allProducts}
              prod={product}
              setProducts={setProducts}
              setProduct={setProduct}
              handlerAddCart={handlerAddCart}
            ></Products>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
