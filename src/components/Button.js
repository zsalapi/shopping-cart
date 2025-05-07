export function Button({ handler, children }) {
  return (
    <>
      <button onClick={handler}>{children}</button>
    </>
  );
}
