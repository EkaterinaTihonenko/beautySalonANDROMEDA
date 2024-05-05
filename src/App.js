import { BrowserRouter as Router } from "react-router-dom";
import { RoutesItems } from "./helpers/RoutesItems";
import { Footer, Header } from "./components/organisms";
import { HeaderTemplate } from "./components/templates";

import "./App.css";

export const App = () => {
  return (
    <div className="app">
      <Router>
        <HeaderTemplate contentHeader={<Header />} />
        <RoutesItems />
        <Footer />
      </Router>
    </div>
  );
};
/*basename="/beautySalonANDROMEDA/" */
