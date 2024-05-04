export const Currency = ({ contentFormat }) => {
  return (
    <>
      {new Intl.NumberFormat("ru-Ru", {
        style: "currency",
        currency: "BYN",
      }).format(contentFormat)}
    </>
  );
};
