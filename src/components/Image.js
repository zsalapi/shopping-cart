export function Image({ url, alt, isOpen }) {
  return (
    <>
      <img height={isOpen ? "100%" : "150"} src={url} alt={alt} />
    </>
  );
}
