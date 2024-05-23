import { removeSpace } from "../../utils/string-util";
import { Skills } from "../../app-data/data";

const handleTypeChange = (id, value, state) => {
  const [data, setData] = state;
  const newData = { ...data };
  newData.allSkills.map((item) => {
    if (item.id === id) {
      item.type = value;
    }
  });
  setData(newData);
};

const handleSkillChange = (id, value, state) => {
  const [data, setData] = state;
  const newData = { ...data };
  newData.allSkills.map((item) => {
    if (item.id === id) {
      item.skills = [...removeSpace(value).split(",")];
    }
  });
  setData(newData);
};

const AddSkill = ({ state }) => {
  const handleClick = (form, state) => {
    if (!form.skills.trim() || !form["skill-type"].trim()) {
      return;
    }
    const [data, setData] = state;
    const newData = { ...data };
    const newSkill = new Skills(
      form["skill-type"].value,
      removeSpace(form.skills.value).split(",")
    );
    newData.allSkills.push(newSkill);
    setData(newData);
    form["skill-type"].value = "";
    form.skills.value = "";
  };

  return (
    <div className="form-field-wrapper">
      <p>Add more skills</p>
      <label htmlFor="more-skills">Skill type</label>
      <input
        id="skill-type"
        name="more-skills"
        placeholder="Skill type"
        required
      />
      <label htmlFor="skills">Skill</label>
      <textarea
        className="skills-box"
        id="skills"
        placeholder="List of skill saperated by a coma e.g- Writting, Marketing"
        required
      ></textarea>
      <button
        type="submit"
        id="add-skills-btn"
        onClick={(e) => handleClick(e.target.form, state)}
      >
        Add skills
      </button>
    </div>
  );
};

const deleteSkill = (id, state) => {
  const [data, setData] = state;
  const remainingSkills = [];
  const newData = { ...data };
  newData.allSkills.forEach((item) => {
    if (item.id !== id) {
      remainingSkills.push(item);
    }
  });
  newData.allSkills = remainingSkills;
  setData(newData);
};

const SkillComp = ({ id, inputName, value, skills, state }) => {
  return (
    <div className="form-field-wrapper">
      <label htmlFor={id}>Skill type</label>
      <input
        id={id}
        name={inputName}
        defaultValue={value}
        placeholder="Skill type"
        onChange={(e) => handleTypeChange(id, e.target.value, state)}
      />
      <label htmlFor={id + "-skills"}>Skills</label>
      <textarea
        className="skills-box"
        id={id + "-skills"}
        defaultValue={skills.join(", ")}
        placeholder="List of skill saperated by a coma e.g- Writting, Marketing"
        onChange={(e) => handleSkillChange(id, e.target.value, state)}
      ></textarea>
      <button id="delete-btn" onClick={() => deleteSkill(id, state)}>
        Delete
      </button>
    </div>
  );
};

export default function SkillsForm({ state }) {
  const data = state[0];
  return (
    <>
      {data.allSkills.map((item) => {
        return (
          <SkillComp
            key={item.id}
            id={item.id}
            inputName={item.type}
            value={item.type}
            skills={item.skills}
            state={state}
          />
        );
      })}
      <AddSkill state={state} />
    </>
  );
}
