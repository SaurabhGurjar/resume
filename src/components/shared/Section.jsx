import Seperator from "./Seperator";

export default function Section({ id, content }) {
  return (
    <section id={id} className="cv-preview-section">
      {content}
    </section>
  );
}
