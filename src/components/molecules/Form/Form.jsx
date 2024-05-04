import { useForm } from "react-hook-form";
import { Text } from "../../atoms";

import style from "./form.module.css";
import "../../../styles/btns.css";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    alert(`${data.name} мы с вами свяжемся в течении 10 минут!`);
    console.log(data);
    reset();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={style.order__item}>
        <label className={style.label} htmlFor="name">
          Как тебя зовут?
        </label>
        <input
          {...register("name", {
            required: "Обязательное поле",
          })}
          type="text"
          placeholder="Мария Иванова"
          className={style.order__input}
        />
        {errors?.name && <div>{errors?.name?.message || "Error!"}</div>}
      </div>
      <div className={style.order__item}>
        <label className={style.label} htmlFor="tel">
          Твой телефон:
        </label>
        <input
          {...register("tel", {
            required: "Обязательное поле",
            pattern: {
              value: /^\s*\+?375((33\d{7})|(29\d{7})|(44\d{7}|)|(25\d{7}))\s*$/,
              message: "Укажите ваш телефон!",
            },
          })}
          type="tel"
          placeholder="+375 (44) 222-22-22"
          className={style.order__input}
        />
        {errors?.tel && <div>{errors?.tel?.message || "Error!"}</div>}
      </div>
      <button
        type="submit"
        className={`${style.order__btn} ${"btn"} ${"btn__fill"}`}
        disabled={!isValid}
      >
        ОТПРАВИТЬ ЗАЯВКУ
      </button>

      <Text
        classText={style.order__info}
        content=" Нажимая на кнопку “Отправить заявку” вы соглашаетесь с условиями
      политики конфиденциальности"
      />
    </form>
  );
};
