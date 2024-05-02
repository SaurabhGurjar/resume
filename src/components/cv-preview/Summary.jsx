import Para from "../shared/Paragraph";
import Section from "../shared/Section";
import Heading from "../shared/SectionHeading";
import Seperator from "../shared/Seperator";

const content = (summary) => {
  return (
    <>
      <Heading text="Summary" />
      <Seperator cls="section-heading-seperator" />
      <Para text={summary} />
    </>
  );
};
export default function Summary({ summary }) {
  return <Section id="Summary" content={content(summary)} />;
}
