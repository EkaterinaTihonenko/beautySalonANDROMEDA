import { useEffect, useState } from "react";
import Loader from "../../atoms/Loader/Loader";
import { Gallery } from "../../organisms";
import { Cursor } from "../../atoms/Cursor/Cursor";

//import style from "./galleryPage.module.css";

export const GalleryPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <Cursor />
      <Gallery />
    </>
  );
};
