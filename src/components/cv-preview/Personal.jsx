import { allCap, capitalize } from "../../utils/string-util";
import Section from "../shared/Section";
import List from "../shared/List";

const Content = ({ name, job, contact }) => {
  return (
    <>
      <h1 className="person-name">{allCap(name)}</h1>
      <h2 className="prev-job-title">{capitalize(job)}</h2>
      <List items={contact} />
    </>
  );
};
export default function Personal({ id, name, job, contact }) {
  return (
    <Section
      id="personal-section"
      content={<Content name={name} job={job} contact={contact} />}
    />
  );
}
