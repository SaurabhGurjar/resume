import { useState } from "react";
import "./App.css";
import CV from "./components/CVPreview";
import Form from "./components/Form";
import Nav from "./components/Nav";

import { data as appData } from "./app-data/data";

function App() {
  const data = useState(appData);
  const navState = useState("0");
  return (
    <>
      <div className="nav-container">
        <Nav state={navState} />
      </div>
      <div className="seperator"></div>
      <div className="form-container">
        <Form dataState={data} navState={navState}/>
      </div>
      <div className="cv-container">
        <CV state={data} />
      </div>
    </>
  );
}

export default App;
