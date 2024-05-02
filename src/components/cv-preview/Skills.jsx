import { Fragment } from "react";
import List from "../shared/List";
import Section from "../shared/Section";
import Heading from "../shared/SectionHeading";
import Seperator from "../shared/Seperator";
import { v4 as uuidv4 } from "uuid";

/**
 * [
 *  {
 *      id: "biz-s",
 *      type: "Business"
 *      skills: [
 *               "Budgeting",
 *               "Financial Analysis",
 *               "Project Management",
 *               "Stakeholder Management",
 *               "Business Strategy"
 *              ]
 *  },
 *
 * {
 *      id: "tec-s",
 *      type: "Technology"
 *      skills: [
 *               "Excel",
 *               "VBA",
 *               "SQL",
 *               "QuickBooks",
 *               "Power BI",
 *               "Tableau",
 *               "Python"
 *              ]
 *  },
 * ]
 */

const content = (skills) => {
  return (
    <>
      <Heading text="Skills" />
      <Seperator cls="section-heading-seperator" />
      {skills.map((skill) => {
        return (
          <Fragment key={uuidv4()}>
            <div className="skill-type-wrapper">
              <h3 key={uuidv4()}>{skill.type}:</h3>
              <List key={uuidv4()} items={skill.skills} />
            </div>
          </Fragment>
        );
      })}
    </>
  );
};
export default function Skills({ skills }) {
  return <Section id="skills-section" content={content(skills)} />;
}
