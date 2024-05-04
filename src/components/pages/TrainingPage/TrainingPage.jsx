import { useEffect, useState } from "react";
import Loader from "../../atoms/Loader/Loader";
import { Cursor } from "../../atoms/Cursor/Cursor";
import { BlockSection, Tabs } from "../../molecules";

import style from "./trainingPage.module.css";

export const TrainingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  return (
    <div className={style.training}>
      {isLoading && <Loader />}
      <Cursor />
      <BlockSection index={1} />
      <Tabs />
    </div>
  );
};
