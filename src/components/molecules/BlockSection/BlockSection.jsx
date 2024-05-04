import style from "./blockSection.module.css";
import { blockContent } from "../../../constants/blockContent";
import { TextSpan, TitleSection } from "../../atoms";

export const BlockSection = ({ index }) => {
  return (
    <>
      {
        blockContent.map((item, index) => {
          return (
            <div className="block" key={index}>
              <TitleSection classSection={style.title} content={item.title} />
              <TextSpan content={item.text} />
            </div>
          );
        })[index]
      }
    </>
  );
};
