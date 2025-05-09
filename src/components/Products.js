import { useState } from "react";
import { Product } from "./Product";
import { PaginationButton } from "./PaginationButton";

export function Products({ products, prod, handlerAddCart, setProduct }) {
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(3);
  const Products = products.filter(
    (product) => product.serial >= num1 && product.serial <= num2
  );
  const [filteredProducts, setFilteredProducts] = useState(Products);
  const [isOpen, setIsOpen] = useState(false);

  function handlePrevious() {
    if (num1 > 3) {
      const n1 = num1 - 3;
      const n2 = num2 - 3;
      setNum1(n1);
      setNum2(n2);
      const Products = products.filter(
        (product) => product.serial >= n1 && product.serial <= n2
      );
      setFilteredProducts(Products);
    }
  }

  function handleNext() {
    if (num2 < products.length) {
      const n1 = num1 + 3;
      const n2 = num2 + 3;
      setNum1(n1);
      setNum2(n2);
      const Products = products.filter(
        (product) => product.serial >= n1 && product.serial <= n2
      );
      setFilteredProducts(Products);
    }
  }

  return (
    <>
      <div>
        <br></br>
        <div align="center" className={isOpen ? "selected" : ""}>
          {isOpen ? (
            <>
              <Product
                key={prod.serial}
                prod={prod}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                setProduct={setProduct}
                handlerAddCart={handlerAddCart}
              />
            </>
          ) : (
            <div align="center">
              {filteredProducts.map((product) => (
                <>
                  <Product
                    key={product.serial}
                    prod={product}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    setProduct={setProduct}
                    handlerAddCart={handlerAddCart}
                  />
                </>
              ))}
            </div>
          )}
          {!isOpen && (
            <div align="center">
              <PaginationButton handler={handlePrevious}>
                Previous
              </PaginationButton>
              &nbsp; &nbsp; &nbsp;
              <PaginationButton handler={handleNext}>Next</PaginationButton>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
