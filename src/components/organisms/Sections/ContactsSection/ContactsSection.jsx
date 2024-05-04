import { LinkItem, Map, Text, TextSpan, TitleSection } from "../../../atoms";
import { SectionTemplate } from "../../../templates";
import { contacts } from "../../../../constants/contacts";

import style from "./contactsSection.module.css";
import "../../../../styles/bgTextSection.css";

export const ContactsSection = ({ classSection }) => {
  return (
    <SectionTemplate
      classSection={classSection}
      contentSection={
        <>
          <Text
            classText={`${style.bg__text} ${"bg__text"}`}
            content="КОНТАКТЫ"
          />
          <TitleSection content={<>КОНТАКТЫ</>} />
          <address className={`${style.wrapp} ${"d-flex"}`}>
            <div className={`${style.item} ${"d-flex"}`}>
              <div className={style.col}>
                {contacts.map((item, index) => {
                  return (
                    <div className={style.col_row} key={index}>
                      <TextSpan
                        classTextSpan={style.row__title}
                        content={item.item}
                      />
                      <div className={style.icon}>
                        {item.icon}
                        <LinkItem
                          classLink={style.row__link}
                          link={item.link}
                          content={item.content}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <Map />
          </address>
        </>
      }
    />
  );
};
