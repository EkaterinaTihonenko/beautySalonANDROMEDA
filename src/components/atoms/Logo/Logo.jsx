import { LinkItem } from "../LinkItem";
import { ImgSrc } from "../ImgSrc";
import logo from "../../../assets/images/logo.svg";

import style from "./logo.module.css";

export const Logo = ({ classLogo, classLogoImg }) => {
  return (
    <LinkItem
      link="/"
      classLink={`${style.logo} ${classLogo || ""}`}
      content={
        <ImgSrc
          classImg={`${classLogoImg || ""} ${style.logo_img}`}
          content={logo}
          altContent="logo"
        />
      }
    />
  );
};
