import style from "./headerTemplate.module.css";

export const HeaderTemplate = ({ contentHeader, classHeader }) => {
  return (
    <header className={`${style.header} ${classHeader || ""}`}>
      <div className="container">{contentHeader}</div>
    </header>
  );
};
