import "../styles/cv-preview.css";
import Education from "./cv-preview/Education";
import Work from "./cv-preview/Experience";
import Personal from "./cv-preview/Personal";
import Skills from "./cv-preview/Skills";
import Summary from "./cv-preview/Summary";
import Courses from "./cv-preview/Courses";
import Hobby from "./cv-preview/Hobby";
import {
  personalInfo,
  summary,
  skills,
  work,
  educationData,
  certificatesData,
  hobbyData,
} from "../app-data/data";

export default function CV() {
  return (
    <div className="cv">
      <Personal
        name={personalInfo.name}
        job={personalInfo.job}
        contact={personalInfo.contact}
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
