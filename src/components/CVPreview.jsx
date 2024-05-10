import "../styles/cv-preview.css";
import Education from "./cv-preview/Education";
import Personal from "./cv-preview/Personal";
import Skills from "./cv-preview/Skills";
import Summary from "./cv-preview/Summary";
import Hobby from "./cv-preview/Hobby";
import Experience from "./cv-preview/Experience";
import Certificates from "./cv-preview/Certificates";

export default function CV({ state }) {
  const data = state[0];
  const personalInfo = data.personalInfo;
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
      <Certificates data={data.certificates} />
      <Hobby data={data.hobbies} />
    </div>
  );
}
