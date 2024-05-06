import { allCap, capitalize } from "../../utils/string-util";
import Section from "../shared/Section";
import List from "../shared/List";

const Content = ({ name, role, contact }) => {
  return (
    <>
      <h1 className="person-name">{allCap(name)}</h1>
      <h2 className="prev-job-title">{capitalize(role)}</h2>
      <List items={contact} />
    </>
  );
};
export default function Personal({ name, role, contact }) {
  return (
    <Section
      id="personal-section"
      content={<Content name={name} role={role} contact={contact} />}
    />
  );
}
