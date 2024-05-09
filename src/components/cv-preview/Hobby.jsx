import { v4 as uuidv4 } from "uuid";

import Section from "../shared/Section";
import Heading from "../shared/SectionHeading";
import Seperator from "../shared/Seperator";

const content = (data) => {
  return (
    <>
      <Heading text="Interests & Hobbies" />
      <Seperator cls="section-heading-seperator" />
      <div className="hobbies-container">
        {data.map((item) => {
          return (
            <div key={item.id} className="Hobby-wapper">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default function Hobby({ data }) {
  return <Section id="hobby-section" content={content(data)} />;
}
