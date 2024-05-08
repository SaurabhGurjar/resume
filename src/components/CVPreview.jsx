import "../styles/cv-preview.css";
import Education from "./cv-preview/Education";
import Work from "./cv-preview/Experience";
import Personal from "./cv-preview/Personal";
import Skills from "./cv-preview/Skills";
import Summary from "./cv-preview/Summary";
import Courses from "./cv-preview/Courses";
import Hobby from "./cv-preview/Hobby";
import {
  work,
  educationData,
  certificatesData,
  hobbyData,
} from "../app-data/data";

export default function CV({ state }) {
  const data = state[0];
  const personalInfo = data.personalInfo;
  console.log(data);
  const linksAndContact = [personalInfo.phoneNumber, personalInfo.email];

  // Append social links to linksAndContact;
  personalInfo.socialLinks.map((item) => linksAndContact.push(item.link));
  const linkContactAndAddress = linksAndContact.concat([personalInfo.address]);
  return (
    <div className="cv">
      <Personal
        name={personalInfo.firstName + " " + personalInfo.lastName}
        role={personalInfo.role}
        email={personalInfo.email}
        contact={linkContactAndAddress}
      />
      <Summary state={state} />
      <Skills state={state} />
      <Work work={work} />
      <Education data={educationData} />
      <Courses data={certificatesData} />
      <Hobby data={hobbyData} />
    </div>
  );
}
