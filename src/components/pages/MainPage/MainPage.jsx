import React, { useState, useEffect } from "react";
import { Cursor } from "../../atoms/Cursor/Cursor";
import {
  AboutUsSection,
  AdvantagesSection,
  BannerMain,
  ContactsSection,
  FormSection,
  PartnersSection,
  ServicesSection,
  TrainingSection,
} from "../../organisms";
import Loader from "../../atoms/Loader/Loader";
import style from "./mainPage.module.css";

export const MainPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <Cursor />
      <main className={style.main}>
        <BannerMain />
        <AboutUsSection />
        <AdvantagesSection />
        <ServicesSection />
        <FormSection />
        <TrainingSection />
        <ContactsSection />
        <PartnersSection />
      </main>
    </>
  );
};
