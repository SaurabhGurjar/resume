import "../styles/cv-preview.css";
import Education from "./cv-preview/Education";
import Personal from "./cv-preview/Personal";
import Skills from "./cv-preview/Skills";
import Summary from "./cv-preview/Summary";
import Courses from "./cv-preview/Courses";
import Hobby from "./cv-preview/Hobby";
import { certificatesData } from "../app-data/data";
import Experience from "./cv-preview/Experience";

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
      <Summary data={data.summary} />
      <Skills data={data.allSkills} />
      <Experience data={data.experience} />
      <Education data={data.education} />
      <Courses data={certificatesData} />
      <Hobby data={data.hobbies} />
    </div>
  );
}
