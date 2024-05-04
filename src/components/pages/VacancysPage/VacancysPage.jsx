import { useEffect, useState } from "react";
import Loader from "../../atoms/Loader/Loader";
import { Cursor } from "../../atoms/Cursor/Cursor";
import { Tel, Text, TitleSection } from "../../atoms";
import { BlockSection } from "../../molecules";
import { vacancys } from "../../../constants/vacancys";

import style from "./vacancysPage.module.css";

export const VacancysPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  return (
    <div className={style.vacancys}>
      {isLoading && <Loader />}
      <Cursor />
      <BlockSection index={0} />
      <Tel classTel={style.tel} classLink={style.tel__link} />
      <main className="conteiner">
        <TitleSection
          content="Кто нам нужен:"
          classSection={style.title__section}
        />
        {vacancys.map((item, index) => {
          return (
            <Text classText={style.text} key={index} content={item.vacancy} />
          );
        })}
      </main>
    </div>
  );
};
