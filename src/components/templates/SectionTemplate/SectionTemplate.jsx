import style from "./sectionTemplate.module.css";

export const SectionTemplate = ({ contentSection, classSection, id }) => {
  return (
    <section className={`${style.section} ${classSection || ""}`}>
      <div className="container" id={id || ""}>
        {contentSection}
      </div>
    </section>
  );
};
