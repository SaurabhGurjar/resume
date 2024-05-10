import { Education } from "../../app-data/data";

const handleChange = (id, element, state) => {
  const [data, setData] = state;
  const newData = { ...data };
  newData.education.forEach((item) => {
    if (item.id === id) {
      item[element.name] = element.value;
    }
  });
  setData(newData);
};

const deleteEducation = (id, state) => {
  const [data, setData] = state;
  const newData = { ...data };
  const remainingEdu = [];
  newData.education.forEach((item) => {
    if (item.id !== id) {
      remainingEdu.push(item);
    }
  });
  newData.education = remainingEdu;
  setData(newData);
};

const EducationComp = ({
  id,
  institute,
  course,
  address,
  started,
  ended,
  state,
}) => {
  return (
    <div className="form-field-wrapper">
      <label htmlFor={id + "institute"}>Institute name</label>
      <input
        id={id + "institute"}
        name="institute"
        defaultValue={institute}
        placeholder="Institue name"
        onChange={(e) => handleChange(id, e.target, state)}
      />
      <label htmlFor={id + "course"}>Course</label>
      <input
        id={id + "course"}
        name="course"
        defaultValue={course}
        placeholder="Course name"
        onChange={(e) => handleChange(id, e.target, state)}
      />
      <label htmlFor={id + "address"}>Address</label>
      <input
        id={id + "address"}
        name="address"
        defaultValue={address}
        placeholder="Institue address"
        onChange={(e) => handleChange(id, e.target, state)}
      />
      <label htmlFor={id + "started"}>Started</label>
      <input
        id={id + "started"}
        name="started"
        defaultValue={started}
        placeholder="2024"
        onChange={(e) => handleChange(id, e.target, state)}
      />
      <label htmlFor={id + "ended"}>Ended</label>
      <input
        id={id + "ended"}
        name="ended"
        defaultValue={ended}
        placeholder="'2024' or 'Ongoing'"
        onChange={(e) => handleChange(id, e.target, state)}
      />
      <button id="delete-btn" onClick={() => deleteEducation(id, state)}>
        Delete
      </button>
    </div>
  );
};

const AddEducation = ({ state }) => {
  const [data, setData] = state;
  const handleClick = (form) => {
    if (
      !form.addInstitute.value.trim() ||
      !form.addAddress.value.trim() ||
      !form.addCourse.value.trim() ||
      !form.addStarted.value.trim() ||
      !form.addEnded.value.trim()
    ) {
      return;
    }
    const newData = { ...data };
    newData.education.push(
      new Education(
        form.addInstitute.value,
        form.addAddress.value,
        form.addCourse.value,
        form.addStarted.value,
        form.addEnded.value
      )
    );
    setData(newData);
  };
  return (
    <div className="form-field-wrapper">
      <p>Add more education</p>
      <label htmlFor="institute">Institute name</label>
      <input
        id="institute"
        name="addInstitute"
        placeholder="Institue name"
        required
      />
      <label htmlFor="course">Course</label>
      <input id="course" name="addCourse" placeholder="Course name" required />
      <label htmlFor="address">Address</label>
      <input
        id="address"
        name="addAddress"
        placeholder="Institue address"
        required
      />
      <label htmlFor="started">Started</label>
      <input id="started" name="addStarted" placeholder="2024" required />
      <label htmlFor="ended">Ended</label>
      <input
        id="ended"
        name="addEnded"
        placeholder="'2024' or 'Ongoing'"
        required
      />
      <button id="add-education" onClick={(e) => handleClick(e.target.form)}>
        Add Education
      </button>
    </div>
  );
};

export default function EducationForm({ state }) {
  const data = state[0];
  return (
    <>
      {data.education.map((item) => {
        return (
          <EducationComp
            key={item.id}
            id={item.id}
            institute={item.institute}
            course={item.course}
            address={item.address}
            started={item.started}
            ended={item.ended}
            state={state}
          />
        );
      })}
      <AddEducation state={state} />
    </>
  );
}
