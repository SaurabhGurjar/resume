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
          <div key={item.id} className="certificate-wrapper">
            <h2>{item.name}</h2>
            <Seperator cls="certificate-seperator" />

            <h2>{item.provider},</h2>
            <h2>{item.completedIn}</h2>
          </div>
        );
      })}
    </>
  );
};
export default function Certificates({ data }) {
  return <Section id="certificate-section" content={content(data)} />;
}
