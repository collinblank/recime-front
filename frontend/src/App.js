import { Route } from "react-router-dom"

import Header from "./components/Header"
import CardsIndex from "./components/Cards"
import "./App.css";

function App() {
  return (
  <div className="all">
    <div className="whitebackground">
      <Header className="nav_and_head"/>
    </div>
    <div className="body">
      <CardsIndex />
    </div>
  </div>
  );
}

export default App;
