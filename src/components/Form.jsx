import PersonalForm from "./forms/PersonalForm";
import "../styles/form.css";
import SummaryForm from "./forms/SummaryForm";
import SkillsForm from "./forms/SkillsForm";

const handleNext = (state) => {
  const [buttonId, setButtonId] = state;
  setButtonId(String(parseInt(buttonId) + 1));
};

const handleBack = (state) => {
  const [buttonId, setButtonId] = state;
  setButtonId(String(parseInt(buttonId) - 1));
};

export default function Form({ navState, dataState }) {
  const nav = navState[0];
  let formTitle = "";
  switch (nav) {
    case "0":
      formTitle = "Personal Information";
      break;
    case "1":
      formTitle = "Summary";
      break;
    case "2":
      formTitle = "Skills";
      break;
    default:
      formTitle = "Not Implemented";
      break;
  }
  return (
    <>
      <form onSubmit={(event) => event.preventDefault()}>
        <div className="form-title">{formTitle}</div>
        {nav === "0" && <PersonalForm state={dataState} />}
        {nav === "1" && <SummaryForm state={dataState} />}
        {nav === "2" && <SkillsForm state={dataState} />}
      </form>
      <div className="next-prev-button-container">
        {nav === "0" ? (
          <button id="back" disabled>
            Back
          </button>
        ) : (
          <button id="back" onClick={() => handleBack(navState)}>
            Back
          </button>
        )}
        {nav === "5" ? (
          <button id="next" disabled>
            Next
          </button>
        ) : (
          <button id="next" onClick={() => handleNext(navState)}>
            Next
          </button>
        )}
      </div>
    </>
  );
}
