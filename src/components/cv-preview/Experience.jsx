import { Fragment } from "react";
import List from "../shared/List";
import Para from "../shared/Paragraph";
import Section from "../shared/Section";
import Heading from "../shared/SectionHeading";
import Seperator from "../shared/Seperator";

const content = (data) => {
  return (
    <>
      <Heading text="Experience" />
      <Seperator cls="section-heading-seperator" />
      {data.map((item) => {
        return (
          <div key={item.id} className="company-wrapper">
            <div className="company-name-ad">
              <h2>{item.company}</h2>
              <h2>{item.address}</h2>
            </div>
            {item.description !== "" && <Para text={item.description} />}
            {item.role.map((job) => {
              return (
                <Fragment key={job.id}>
                  <div className="position-work-period">
                    <h3>{job.position}</h3>
                    <h3>{`${job.started} - ${job.ended}`}</h3>
                  </div>
                  {<List items={job.workdone} />}
                </Fragment>
              );
            })}
          </div>
        );
      })}
    </>
  );
};
export default function Experience({ data }) {
  return <Section id="work-section" content={content(data)} />;
}
