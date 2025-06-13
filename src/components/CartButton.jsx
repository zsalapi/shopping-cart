export function CartButton({ handler, children }) {
  return (
    <>
      <br></br>
      <button onClick={handler}>{children}</button>
    </>
  );
}
