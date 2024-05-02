import "./App.css";
import CV from "./components/CVPreview";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div className="nav-container">
        <Nav />
      </div>
      <div className="seperator"></div>
      <div className="cv-container">
        <CV />
      </div>
    </>
  );
}

export default App;
