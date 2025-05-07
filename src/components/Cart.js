import { Image } from "./Image";

export function Cart({ product, setProduct, handlerRemoveCart }) {
  setProduct(product);

  return (
    <>
      <br></br>
      <br></br>
      <table width="500">
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
              <button onClick={() => handlerRemoveCart(product.serial)}>
                Remove
              </button>
            </td>
            <td>{product.title}</td>
          </tr>
        </tbody>
        <tfoot></tfoot>
      </table>
    </>
  );
}
