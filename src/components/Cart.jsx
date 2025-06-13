import { useState } from "react";
import { Image } from "./Image";

export function Cart({
  product,
  setProduct,
  setProducts,
  setCartProducts,
  handlerRemoveCart,
  products,
}) {
  const [prod, setProd] = useState(product);

  function handlerChangeCart(e) {
    e.preventDefault();

    //let prod = product;
    //alert(e.target.value);
    if (prod.count >= Number(e.target.value) && Number(e.target.value) > 0) {
      //prod.count = prod.count - prod.cart;
      prod.cart = e.target.value;
      products[prod.id].cart = prod.cart;
      //in the future we must this when order has been released
      //products[prod.id].count = prod.count;
    }
    setProd(prod);
    setProduct(prod);
    setProducts(products);
    let all = products.filter((product) => product.inCart === true);
    setCartProducts(all);
  }

  return (
    <>
      <br></br>
      <br></br>
      <table align="center" width="500">
        <thead></thead>
        <tbody>
          <tr>
            <td colSpan="2">
              <br></br>
            </td>
          </tr>
          <tr>
            <td>
              <Image url={product.img} alt={product.title} />
              <form className="form-add-count" onSubmit={handlerChangeCart}>
                <input
                  id={product.id}
                  type="number"
                  value={product.cart}
                  onChange={handlerChangeCart}
                />
              </form>
              <button
                className="button"
                onClick={() => handlerRemoveCart(product.serial)}
              >
                Remove
              </button>
            </td>
            <td>
              {product.title}
              <br></br>Price: {product.price}
            </td>
          </tr>
        </tbody>
        <tfoot></tfoot>
      </table>
    </>
  );
}
