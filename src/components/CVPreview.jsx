import "../styles/cv-preview.css";
import Education from "./cv-preview/Education";
import Work from "./cv-preview/Experience";
import Personal from "./cv-preview/Personal";
import Skills from "./cv-preview/Skills";
import Summary from "./cv-preview/Summary";
import Courses from "./cv-preview/Courses";
import Hobby from "./cv-preview/Hobby";
import {
  summary,
  skills,
  work,
  educationData,
  certificatesData,
  hobbyData,
} from "../app-data/data";

export default function CV({ state }) {
  const data = state[0];
  const linksAndContact = [data.phoneNumber, data.email];

  // Append social links to linksAndContact;
  data.socialLinks.map((item) => linksAndContact.push(item.link));
  const linkContactAndAddress = linksAndContact.concat([data.address]);
  return (
    <div className="cv">
      <Personal
        name={data.firstName + " " + data.lastName}
        role={data.role}
        email={data.email}
        contact={linkContactAndAddress}
      />
      <Summary summary={summary} />
      <Skills skills={skills} />
      <Work work={work} />
      <Education data={educationData} />
      <Courses data={certificatesData} />
      <Hobby data={hobbyData} />
    </div>
  );
}
