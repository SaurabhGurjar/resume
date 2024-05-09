import { Fragment } from "react";
import List from "../shared/List";
import Section from "../shared/Section";
import Heading from "../shared/SectionHeading";
import Seperator from "../shared/Seperator";

const content = (data) => {
  return (
    <>
      <Heading text="Skills" />
      <Seperator cls="section-heading-seperator" />
      {data.map((item) => {
        return (
          <Fragment key={item.id}>
            <div className="skill-type-wrapper">
              <h3>{item.type}:</h3>
              <List items={item.skills} />
            </div>
          </Fragment>
        );
      })}
    </>
  );
};
export default function Skills({ data }) {
  return <Section id="skills-section" content={content(data)} />;
}
