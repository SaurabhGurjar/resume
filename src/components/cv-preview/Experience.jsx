import { v4 as uuidv4 } from "uuid";

import { Fragment } from "react";
import List from "../shared/List";
import Para from "../shared/Paragraph";
import Section from "../shared/Section";
import Heading from "../shared/SectionHeading";
import Seperator from "../shared/Seperator";

const content = (work) => {
  return (
    <>
      <Heading text="Experience" />
      <Seperator cls="section-heading-seperator" />
      {work.map((item) => {
        return (
          <div key={uuidv4()} className="company-wrapper">
            <div className="company-name-ad">
              <h2>{item.company}</h2>
              <h2>{item.address}</h2>
            </div>
            {item.role.map((job) => {
              return (
                <Fragment key={uuidv4()}>
                  <div className="position-work-period">
                    <h3>{job.position}</h3>
                    <h3>{`${job.started} - ${job.ended}`}</h3>
                  </div>
                  {item.description !== "" && <Para text={item.description} />}
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
export default function Work({ work }) {
  return <Section id="work-section" content={content(work)} />;
}
