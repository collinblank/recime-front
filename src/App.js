import { Route } from "react-router-dom"

import Header from "./components/Header"
import Body from "./components/Body"
import "./App.css";

function App() {
  return (
  <div className="all">
    <div className="whitebackground">
      <Header className="nav_and_head"/>
    </div>
    <div className="body">
      <Body />
    </div>
  </div>
  );
}

export default App;
