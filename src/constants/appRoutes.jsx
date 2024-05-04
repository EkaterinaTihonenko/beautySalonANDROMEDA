import {
  ContactsPage,
  ErrorPage,
  GalleryPage,
  MainPage,
  SalesPage,
  TrainingPage,
  VacancysPage,
} from "../components/pages";

export const APP_ROUTES = [
  {
    path: "/",
    element: <MainPage />,
    name: "Главная",
  },
  {
    path: "/gallery",
    element: <GalleryPage />,
    name: "Галерея",
  },
  {
    path: "/sales",
    element: <SalesPage />,
    name: "Акции",
  },
  {
    path: "/vacancys",
    element: <VacancysPage />,
    name: "Вакансии",
  },
  {
    path: "/training",
    element: <TrainingPage />,
    name: "Обучение",
  },
  {
    path: "/contacts",
    element: <ContactsPage />,
    name: "Контакты",
  },
  {
    path: "",
    element: <ErrorPage />,
    name: "Error",
  },
];
