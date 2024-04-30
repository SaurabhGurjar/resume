import { useState } from "react";

import Button from "./shared/Button/Button";
import PersonIcon from "./shared/SVGs/Person";
import EducationIcon from "./shared/SVGs/Edu";
import WorkIcon from "./shared/SVGs/Work";
import SummaryIcon from "./shared/SVGs/Summary";
import HobbyIcon from "./shared/SVGs/Hobby";
import Logo from "./shared/SVGs/Logo";
import SkillIcon from "./shared/SVGs/Skills";

import "../styles/nav.css";

export default function Nav() {
  const [buttonId, setButtonId] = useState(0);
  const handleClick = (id) => {
    setButtonId(id);
  };

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Logo color="#000" />
        <h2>CV</h2>
      </div>
      <div className="nav-button-container">
        <Button
          id="0"
          cls={`${"nav-button"} ${buttonId === "0" ? "selected" : ""}`}
          icon={<PersonIcon color={buttonId === "0" ? "#fff" : "#000"} />}
          onClick={handleClick}
          isSelected={buttonId === "0"}
        />
        <Button
          id="1"
          cls={`${"nav-button"} ${buttonId === "1" ? "selected" : ""}`}
          icon={<SummaryIcon color={buttonId === "1" ? "#fff" : "#000"} />}
          onClick={handleClick}
          isSelected={buttonId === "1"}
        />
        <Button
          id="2"
          cls={`${"nav-button"} ${buttonId === "2" ? "selected" : ""}`}
          icon={<SkillIcon color={buttonId === "2" ? "#fff" : "#000"} />}
          onClick={handleClick}
          isSelected={buttonId === "2"}
        />
        <Button
          id="3"
          cls={`${"nav-button"} ${buttonId === "3" ? "selected" : ""}`}
          icon={<WorkIcon color={buttonId === "3" ? "#fff" : "#000"} />}
          onClick={handleClick}
          isSelected={buttonId === "3"}
        />
        <Button
          id="4"
          cls={`${"nav-button"} ${buttonId === "4" ? "selected" : ""}`}
          icon={<EducationIcon color={buttonId === "4" ? "#fff" : "#000"} />}
          onClick={handleClick}
          isSelected={buttonId === "4"}
        />
        <Button
          id="5"
          cls={`${"nav-button"} ${buttonId === "5" ? "selected" : ""}`}
          icon={<HobbyIcon color={buttonId === "5" ? "#fff" : "#000"} />}
          onClick={handleClick}
          isSelected={buttonId === "5"}
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
