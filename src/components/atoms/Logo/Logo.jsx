import { LinkItem } from "../LinkItem";
import { ImgSrc } from "../ImgSrc";
import logo from "../../../assets/images/logo.svg";
import { Scrool } from "../../../helpers/scrool";

import style from "./logo.module.css";

export const Logo = ({ classLogo, classLogoImg }) => {
  return (
    <LinkItem
      link="/"
      classLink={`${style.logo} ${classLogo || ""}`}
      onClick={Scrool}
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
