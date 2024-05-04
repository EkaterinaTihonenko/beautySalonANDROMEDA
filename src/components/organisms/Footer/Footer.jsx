import { LinkItem, Logo, Tel } from "../../atoms";
import style from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <Logo classLogo={style.logo} classLogoImg={style.logo__img} />
      <div className={style.block__right}>
        <LinkItem
          classLink={style.link}
          link="#"
          content="Политика конфиденциальности"
        />
        <Tel classLink={style.link} />
      </div>
    </footer>
  );
};
