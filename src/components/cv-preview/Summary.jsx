import { sentenceCase } from "../../utils/string-util";
import Para from "../shared/Paragraph";
import Section from "../shared/Section";
import Heading from "../shared/SectionHeading";
import Seperator from "../shared/Seperator";

const content = (summary) => {
  return (
    <>
      <Heading text="Summary" />
      <Seperator cls="section-heading-seperator" />
      <Para text={sentenceCase(summary)} />
    </>
  );
};
export default function Summary({ data }) {
  return <Section id="summary" content={content(data)} />;
}
