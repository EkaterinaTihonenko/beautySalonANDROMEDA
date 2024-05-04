import { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";

import style from "./modal.module.css";
import { Btn } from "../../atoms";

const modalRootElement = document.querySelector("#portal");

export const Modal = (props) => {
  const { modalActive, onClose } = props;
  const element = useMemo(() => document.createElement("div"), []);

  useEffect(() => {
    if (modalActive) {
      modalRootElement.appendChild(element);

      return () => {
        modalRootElement.removeChild(element);
      };
    }
  });

  if (modalActive) {
    return createPortal(
      <div className={style.modal} onClick={onClose}>
        <div className={style.modal__card}>
          {props.children}
          <Btn
            classBtn={style.modal__btn}
            typeBtn="button"
            onClick={onClose}
            content="x"
          />
        </div>
      </div>,
      element
    );
  }
  return null;
};
