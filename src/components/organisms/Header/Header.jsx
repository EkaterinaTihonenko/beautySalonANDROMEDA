import { Logo, Tel } from "../../atoms";
import { Navigation } from "../Navigation";

import style from "./header.module.css";

export const Header = () => {
  return (
    <div className={style.nav_row}>
      <Logo />
      <Navigation />
      <Tel />
    </div>
  );
};
