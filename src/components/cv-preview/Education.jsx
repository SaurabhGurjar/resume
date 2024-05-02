import { v4 as uuidv4 } from "uuid";
import { Fragment } from "react";
import Section from "../shared/Section";
import Heading from "../shared/SectionHeading";
import Seperator from "../shared/Seperator";

const content = (data) => {
  return (
    <>
      <Heading text="Education" />
      <Seperator cls="section-heading-seperator" />
      {data.map((item) => {
        return (
          <div key={uuidv4()} className="school-wrapper">
            <div className="school-name-ad">
              <h2>{item.school}</h2>
              <h2>{item.address}</h2>
            </div>
            <div className="course-name-period">
              <h2>{item.course}</h2>
              <h2>{`${item.started} - ${item.ended}`}</h2>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default function Education({ data }) {
  return <Section id="education-section" content={content(data)} />;
}
