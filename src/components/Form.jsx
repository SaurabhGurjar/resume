import Personal from "./forms/PersonalForm";
import "../styles/form.css";

export default function Form({ state }) {
  return (
    <>
      <form onSubmit={(event) => event.preventDefault()}>
        <Personal state={state} />
      </form>
      <div className="next-prev-button-container">
        <button id="back">Back</button>
        <button id="next">Next</button>
      </div>
    </>
  );
}
