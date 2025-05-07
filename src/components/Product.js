import { Button } from "./Button";
import { Image } from "./Image";

export function Product({
  prod,
  isOpen,
  setIsOpen,
  setProduct,
  handlerAddCart,
}) {
  //derived states are important here
  const show = isOpen;

  function handlerView() {
    //alert(prod.id);
    setProduct(prod);
    setIsOpen(true);
  }

  function handlerClose() {
    setIsOpen(false);
    setProduct(null);
  }

  return (
    <>
      <br></br>
      <br></br>
      <table width={isOpen ? 1280 : 500}>
        <thead></thead>
        <tbody>
          <tr>
            <td colSpan="2">
              <br></br>
            </td>
          </tr>
          <tr>
            <td>
              <Image isOpen={show} url={prod.img} alt={prod.title} />
              {show && <Button handler={handlerAddCart}>Add Cart</Button>}
            </td>
            <td>
              <b>
                Company: {prod.company}
                <br></br>
                Price: ${prod.price}
                <br></br>
              </b>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              Description:<br></br>
              {prod.info}
            </td>
          </tr>
          <tr>
            <td colSpan="2" align="right">
              {show ? (
                <Button handler={handlerClose}>Close</Button>
              ) : (
                <Button handler={handlerView}>View</Button>
              )}
            </td>
          </tr>
        </tbody>
        <tfoot></tfoot>
      </table>
    </>
  );
}
