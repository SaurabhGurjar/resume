import { v4 as uuidv4 } from "uuid";

import Heading from "../shared/SectionHeading";
import Seperator from "../shared/Seperator";
import Section from "../shared/Section";

const content = (data) => {
  return (
    <>
      <Heading text="Course & Certificates" />
      <Seperator cls="section-heading-seperator" />
      {data.map((item) => {
        return (
          <div key={uuidv4()} className="certificate-wrapper">
            <h2>{item.course}</h2>
            <Seperator cls="course-seperator" />

            <h2>{item.institute},</h2>
            <h2>{item.completedIn}</h2>
          </div>
        );
      })}
    </>
  );
};
export default function Course({ data }) {
  return <Section id="courses-section" content={content(data)} />;
}
