import { useState } from "react";
import "./App.css";
import CV from "./components/CVPreview";
import Form from "./components/Form";
import Nav from "./components/Nav";

import { data as appData } from "./app-data/data";

function App() {
  const personalInfo = useState(appData.personalInfo);
  return (
    <>
      <div className="nav-container">
        <Nav />
      </div>
      <div className="seperator"></div>
      <div className="form-container">
        <Form state={personalInfo} />
      </div>
      <div className="cv-container">
        <CV state={personalInfo} />
      </div>
    </>
  );
}

export default App;
