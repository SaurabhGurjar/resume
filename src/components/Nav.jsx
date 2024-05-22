import Button from "./shared/Button";
import PersonIcon from "./shared/SVGs/Person";
import EducationIcon from "./shared/SVGs/Edu";
import WorkIcon from "./shared/SVGs/Work";
import SummaryIcon from "./shared/SVGs/Summary";
import HobbyIcon from "./shared/SVGs/Hobby";
import Logo from "./shared/SVGs/Logo";
import SkillIcon from "./shared/SVGs/Skills";
import CertificateIcon from "./shared/SVGs/Certificate";

import "../styles/nav.css";
import Tag from "./shared/Tag";

const buttonsName = {
  0: "Personal",
  1: "Summary",
  2: "Skills",
  3: "Work Experience",
  4: "Education",
  5: "Certificates",
  6: "Hobby",
};

export default function Nav({ state }) {
  const [buttonId, setButtonId] = state;
  const handleClick = (id) => {
    setButtonId(id);
  };

  return (
    <div className="nav">
      <div className="logo-container">
        <Logo color="#000" />
        <h2>CV</h2>
      </div>
      <div className="nav-button-container">
        <Button
          id="0"
          cls={`${"nav-button"} ${buttonId === "0" ? "selected" : ""}`}
          icon={<PersonIcon color={buttonId === "0" ? "#fff" : "#000"} />}
          tag={buttonId === "0" && <Tag text={buttonsName[0]} />}
          onClick={handleClick}
        />
        <Button
          id="1"
          cls={`${"nav-button"} ${buttonId === "1" ? "selected" : ""}`}
          icon={<SummaryIcon color={buttonId === "1" ? "#fff" : "#000"} />}
          tag={buttonId === "1" && <Tag text={buttonsName[1]} />}
          onClick={handleClick}
        />
        <Button
          id="2"
          cls={`${"nav-button"} ${buttonId === "2" ? "selected" : ""}`}
          icon={<SkillIcon color={buttonId === "2" ? "#fff" : "#000"} />}
          tag={buttonId === "2" && <Tag text={buttonsName[2]} />}
          onClick={handleClick}
        />
        <Button
          id="3"
          cls={`${"nav-button"} ${buttonId === "3" ? "selected" : ""}`}
          icon={<WorkIcon color={buttonId === "3" ? "#fff" : "#000"} />}
          tag={buttonId === "3" && <Tag text={buttonsName[3]} />}
          onClick={handleClick}
        />
        <Button
          id="4"
          cls={`${"nav-button"} ${buttonId === "4" ? "selected" : ""}`}
          icon={<EducationIcon color={buttonId === "4" ? "#fff" : "#000"} />}
          tag={buttonId === "4" && <Tag text={buttonsName[4]} />}
          onClick={handleClick}
        />
        <Button
          id="5"
          cls={`${"nav-button"} ${buttonId === "5" ? "selected" : ""}`}
          icon={<CertificateIcon color={buttonId === "5" ? "#fff" : "#000"} />}
          tag={buttonId === "5" && <Tag text={buttonsName[5]} />}
          onClick={handleClick}
        />
        <Button
          id="6"
          cls={`${"nav-button"} ${buttonId === "6" ? "selected" : ""}`}
          icon={<HobbyIcon color={buttonId === "6" ? "#fff" : "#000"} />}
          tag={buttonId === "6" && <Tag text={buttonsName[6]} />}
          onClick={handleClick}
        />
      </div>
      <div className="social-link-container">
        <a href="https://twitter.com/scg_In" target="_blank">
          X
        </a>
        <a href="https://github.com/SaurabhGurjar" target="_blank">
          G
        </a>
      </div>
    </div>
  );
}
