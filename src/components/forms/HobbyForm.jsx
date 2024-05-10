import { Hobby } from "../../app-data/data";

const handleChange = (id, element, state) => {
  const [data, setData] = state;
  data.hobbies.map((item) => {
    if (item.id === id) {
      item[element.name] = element.value;
    }
  });
  const newData = { ...data };
  setData(newData);
};

const deleteHobby = (id, state) => {
  const [data, setData] = state;
  const remainingHobbies = [];
  const newData = { ...data };
  data.hobbies.forEach((item) => {
    if (item.id !== id) {
      remainingHobbies.push(item);
    }
  });
  newData.hobbies = remainingHobbies;
  setData(newData);
};

const HobbyComp = ({ id, title, description, state }) => {
  return (
    <div className="form-field-wrapper">
      <label htmlFor={id + "title"}>Title</label>
      <input
        type="text"
        id={id + "title"}
        name="title"
        defaultValue={title}
        placeholder="Title"
        onChange={(e) => handleChange(id, e.target, state)}
      />
      <label htmlFor={id + "description"}>Description</label>
      <textarea
        id={id + "description"}
        name="description"
        defaultValue={description}
        placeholder="Description"
        onChange={(e) => handleChange(id, e.target, state)}
      ></textarea>
      <button id="delete-btn" onClick={() => deleteHobby(id, state)}>
        Delete
      </button>
    </div>
  );
};

const AddHobby = ({ state }) => {
  const [data, setData] = state;
  const handleClick = (form) => {
    if (!form.addTitle.value.trim() || !form.addDescription.value.trim()) {
      return;
    }
    const newData = { ...data };
    newData.hobbies.push(
      new Hobby(form.addTitle.value, form.addDescription.value)
    );
    setData(newData);
  };
  return (
    <div className="form-field-wrapper">
      <p>Add more Insterests & Hobbies</p>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" name="addTitle" placeholder="Title" />
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="addDescription"
        placeholder="Description"
      ></textarea>
      <button id="add-hobby" onClick={(e) => handleClick(e.target.form)}>
        Add Hobby/Interest
      </button>
    </div>
  );
};

export default function HobbyForm({ state }) {
  const data = state[0];
  return (
    <>
      {data.hobbies.map((item) => {
        return (
          <HobbyComp
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            state={state}
          />
        );
      })}
      <AddHobby state={state} />
    </>
  );
}
