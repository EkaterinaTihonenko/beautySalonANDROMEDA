import { useState } from "react";
import { useForm } from "react-hook-form";
import { Text } from "../../atoms";
import style from "./form.module.css";
import "../../../styles/btns.css";

export const Form = () => {
  const [result, setResult] = useState("");
  const {
    register,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Отправка....");
    const formData = new FormData(event.target);

    const apiKey = `${process.env.REACT_APP_API_KEY}`;
    formData.append("access_key", apiKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult(
        "Заявка успешно отправлена, мы с вами свяжемся в течении 10 минут, хорошего дня!"
      );
      event.target.reset();
    } else {
      console.log("Error", data);
    }
  };

  return (
    <div className={style.form_wrapp}>
      <form className={style.form} onSubmit={onSubmit}>
        <div className={style.order__item}>
          <label className={style.label} htmlFor="name">
            Как тебя зовут?
          </label>
          <input
            {...register("Имя", {
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
            {...register("Телефон", {
              required: "Обязательное поле",
              pattern: {
                value:
                  /^\s*\+?375((33\d{7})|(29\d{7})|(44\d{7}|)|(25\d{7}))\s*$/,
                message: "Укажите ваш телефон!",
              },
            })}
            type="tel"
            placeholder="+375 (44) 222-22-22"
            className={style.order__input}
          />
          {errors?.tel && <div>{errors?.tel?.message || "Error!"}</div>}
        </div>
        <div className={style.span}>{result}</div>
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
    </div>
  );
};
