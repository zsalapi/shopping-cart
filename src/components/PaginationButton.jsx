export function PaginationButton({ handler, children }) {
  return (
    <>
      <button onClick={handler}>{children}</button>
    </>
  );
}
