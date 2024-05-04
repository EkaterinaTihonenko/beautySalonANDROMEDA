import { LiaTelegramPlane } from "react-icons/lia";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { PiMapPinBold } from "react-icons/pi";
import { FiPhone } from "react-icons/fi";
import { FaViber } from "react-icons/fa6";

export const contacts = [
  {
    icon: <LiaTelegramPlane role="img" />,
    item: "Telegram:",
    content: "@ANDROMEDA",
    link: "https://web.telegram.org/",
  },
  {
    icon: <FaViber role="img" />,
    item: "Viber:",
    content: "+375 (44) 222-22-22",
    link: "tel:+375442222222",
  },
  {
    icon: <MdOutlineMarkEmailRead role="img" />,
    item: "E-mail:",
    content: "andromeda@gmail.com",
    link: "mailto:andromeda@gmail.com",
  },
  {
    icon: <FiPhone role="img" />,
    item: "Телефон:",
    content: "+375 (44) 222-22-22",
    link: "tel:+375442222222",
  },
  {
    icon: <PiMapPinBold role="img" />,
    item: "Адрес:",
    content: "РБ, 00023578, г. Гомель, ул. Мичурина, д. 108.",
    link: "https://yandex.ru/maps/-/CCUOaAE5~D",
  },
];
