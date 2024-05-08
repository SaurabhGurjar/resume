import { sentenceCase } from "../../utils/string-util";

const handleChange = (value, state) => {
  const [data, setData] = state;
  const newData = { ...data };
  newData.summary = value;
  setData(newData);
};

export default function SummaryForm({ state }) {
  const data = state[0];
  return (
    <>
      <label htmlFor="summary-form">About Me</label>
      <textarea
        name="summary"
        id="summary-form"
        onChange={(e) => handleChange(e.target.value, state)}
        defaultValue={sentenceCase(data.summary)}
      ></textarea>
    </>
  );
}
