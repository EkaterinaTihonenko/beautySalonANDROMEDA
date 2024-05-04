import { Input, Label, Logo } from "../../atoms";
import { ListNavigation } from "../../molecules";

import style from "./navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={style.nav}>
      <div className="container d-flex">
        <Input
          typeInput="checkbox"
          idInput="checkbox"
          classInput={style.burger_checkbox}
        />
        <Label forLabel="checkbox" classLabel={style.burger} />
        <div className={`${style.list} ${"d-flex"}`}>
          <div className={style.wrapp__logo}>
            <Logo />
          </div>
          <ListNavigation />
        </div>
      </div>
    </nav>
  );
};
