import { useEffect, useState } from "react";
import Loader from "../../atoms/Loader/Loader";
import { Cursor } from "../../atoms/Cursor/Cursor";
import { ContactsSection } from "../../organisms";

import style from "./contactsPage.module.css";

export const ContactsPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, []);
  return (
    <>
      <div className={style.contacts}>
        {isLoading && <Loader />}
        <Cursor />
        <ContactsSection classSection={style.section} />
      </div>
    </>
  );
};
