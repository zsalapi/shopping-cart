import { useState } from "react";
import "./App.css";
import { initialProducts } from "./data/data";
import { Carts } from "./components/Carts";
import { CartButton } from "./components/CartButton";
import { Products } from "./components/Products";

export function App() {
  const [products, setProducts] = useState(initialProducts);
  const [isCart, setIsCart] = useState(false);
  const pcart = products.filter((product) => product.inCart === true);
  const [cartProducts, setCartProducts] = useState(pcart);
  // const allProducts = products.filter((product) => product.inCart === false);
  let allProducts = products.filter((product) => product);
  const [product, setProduct] = useState();

  let cartOk = cartProducts?.length;

  function handlerRemoveCart(serial) {
    //alert(serial);

    let all = cartProducts?.map((p) => p).filter((p) => p.serial !== serial);
    products[serial - 1].cart = 0;
    setCartProducts(all);
    setProducts(products);
  }

  function handlerAddCart() {
    product.inCart = true;

    if (cartOk) {
      /*cartProducts.map(
        (p, id) =>
          p.serial !== product.serial &&
          setCartProducts([...cartProducts, product])
      );*/

      products[product.id].inCart = true;
      let all = products.filter((product) => product.inCart === true);
      setCartProducts(all);
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
                cartProducts={cartProducts}
                products={products}
                setProducts={setProducts}
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
            <br></br>
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
