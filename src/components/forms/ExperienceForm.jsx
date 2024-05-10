import { Fragment, useState } from "react";
import { Role, Experience } from "../../app-data/data";

const handleCompanyChange = (id, element, state) => {
  const [data, setData] = state;
  const newData = { ...data };
  newData.experience.map((item) => {
    if (item.id === id) {
      item[element.name] = element.value;
    }
  });
  setData(newData);
};

const handleRoleChange = (parendId, id, element, state) => {
  const [data, setData] = state;
  const newData = { ...data };
  newData.experience.map((item) => {
    if (item.id === parendId) {
      item.role.map((child) => {
        if (child.id === id) {
          if (element.name === "workdone") {
            child[element.name] = element.value.split(";");
          } else {
            child[element.name] = element.value;
          }
        }
      });
    }
  });
  setData(newData);
};

const deletePosition = (parendId, id, state) => {
  const [data, setData] = state;
  const newData = { ...data };
  const remainingPositions = [];
  newData.experience.map((item) => {
    if (item.id === parendId) {
      item.role.map((child) => {
        if (child.id !== id) {
          remainingPositions.push(child);
        }
      });
      item.role = remainingPositions;
    }
  });
  setData(newData);
};

const deleteCompany = (id, state) => {
  const [data, setData] = state;
  const newData = { ...data };
  const remainingCompanies = [];
  newData.experience.map((item) => {
    if (item.id !== id) {
      remainingCompanies.push(item);
    }
  });
  newData.experience = remainingCompanies;
  setData(newData);
};

const addNewPostion = (id, form, state, newRoleState) => {
  if (
    form[id + "newPosition"].trim() ||
    form[id + "newWorkdone"].trim() ||
    form[id + "newStarted"].trim() ||
    form[id + "newEnded"].trim()
  ) {
    return;
  }

  const [data, setData] = state;
  const [showRoleForm, setNewRoleForm] = newRoleState;
  let newShowRoleForm = { ...showPositionForm };
  newShowRoleForm = !showRoleForm;
  const newData = { ...data };
  newData.experience.map((item) => {
    if (item.id === id) {
      item.role.push(
        new Role(
          form[id + "newPosition"].value,
          form[id + "newWorkdone"].value.split(";"),
          form[id + "newStarted"].value,
          form[id + "newEnded"].value
        )
      );
    }
  });
  setNewRoleForm(newShowRoleForm);
  setData(newData);
};

const showPositionForm = (newRoleState) => {
  const [showRoleForm, setRoleForm] = newRoleState;
  let newShowRoleForm = { ...showRoleForm };
  newShowRoleForm = !showRoleForm;
  setRoleForm(newShowRoleForm);
};

const addNewCompany = (form, state) => {
  if (
    !form.newCompany.value.trim() ||
    !form.newDescription.value.trim() ||
    !form.newAddress.value.trim() ||
    !form.newPosition.value.trim() ||
    !form.newWorkdone.value.trim() ||
    !form.newStarted.value.trim() ||
    !form.newEnded.value.trim()
  ) {
    return;
  }
  const [data, setData] = state;
  const newData = { ...data };
  newData.experience.push(
    new Experience(
      form.newCompany.value,
      form.newDescription.value,
      form.newAddress.value,
      form.newPosition.value,
      form.newWorkdone.value.split(";"),
      form.newStarted.value,
      form.newEnded.value
    )
  );
  form.newCompany.value = "";
  form.newDescription.value = "";
  form.newAddress.value = "";
  form.newPosition.value = "";
  form.newWorkdone.value = "";
  form.newStarted.value = "";
  form.newEnded.value = "";
  setData(newData);
};

// Componenets
const RoleComp = ({
  parentId,
  id,
  position,
  started,
  ended,
  workdone,
  state,
}) => {
  return (
    <>
      <label htmlFor={id + "position"}>Position</label>
      <input
        type="text"
        id={id + "position"}
        name="position"
        defaultValue={position}
        placeholder="Position"
        onChange={(e) => handleRoleChange(parentId, id, e.target, state)}
      />
      <label htmlFor={id + "workdone"}>Work done</label>
      <textarea
        className="workdone"
        id={id + "workdone"}
        name="workdone"
        defaultValue={workdone.join(";\n\n")}
        onChange={(e) => handleRoleChange(parentId, id, e.target, state)}
      ></textarea>
      <label htmlFor={id + "started"}>Started</label>
      <input
        id={id + "started"}
        name="started"
        defaultValue={started}
        placeholder="2024"
        onChange={(e) => handleRoleChange(parentId, id, e.target, state)}
      />
      <label htmlFor={id + "ended"}>Ended</label>
      <input
        id={id + "ended"}
        name="ended"
        defaultValue={ended}
        placeholder="'2024' or 'Ongoing'"
        onChange={(e) => handleRoleChange(parentId, id, e.target, state)}
      />
      <button onClick={() => deletePosition(parentId, id, state)}>
        Delete position
      </button>
    </>
  );
};

const CompanyComp = ({ id, name, address, role, state }) => {
  const newRoleState = useState(false);
  const newRole = newRoleState[0];
  return (
    <div key={id} className="form-field-wrapper">
      <label htmlFor={id + "company"}>Company name</label>
      <input
        type="text"
        id={id + "company"}
        name="company"
        defaultValue={name}
        placeholder="Company name"
        onChange={(e) => handleCompanyChange(id, e.target, state)}
      />
      <label htmlFor={id + "address"}>Company address</label>
      <input
        type="text"
        id={id + "address"}
        name="address"
        defaultValue={address}
        placeholder="Company address"
        onChange={(e) => handleCompanyChange(id, e.target, state)}
      />
      {role.map((item) => {
        return (
          <Fragment key={item.id}>
            <RoleComp
              parentId={id}
              id={item.id}
              position={item.position}
              started={item.started}
              ended={item.ended}
              workdone={item.workdone}
              state={state}
            />
          </Fragment>
        );
      })}
      {newRole && <AddRole id={id} state={state} />}
      {newRole && (
        <button
          onClick={(e) => addNewPostion(id, e.target.form, state, newRoleState)}
        >
          Add position
        </button>
      )}
      <button onClick={() => deleteCompany(id, state)}>Delete company</button>
      <button onClick={() => showPositionForm(newRoleState)}>
        {newRole ? "Hide position form" : "Add position"}
      </button>
    </div>
  );
};

const AddRole = ({ id = "", state }) => {
  return (
    <>
      <p>Add new position</p>
      <label htmlFor="position">Position</label>
      <input
        type="text"
        id="position"
        name={id + "newPosition"}
        placeholder="Position"
        required
      />
      <label htmlFor="workdone">Work done</label>
      <textarea
        className="workdone"
        id="workdone"
        name={id + "newWorkdone"}
        placeholder="Describe the work you have done in the company or project. If you want to provide multiple points, please end each point with a semi-colon (;)."
        required
      ></textarea>
      <label htmlFor="started">Started</label>
      <input
        id="started"
        name={id + "newStarted"}
        placeholder="2024"
        required
      />
      <label htmlFor="ended">Ended</label>
      <input
        id="ended"
        name={id + "newEnded"}
        placeholder="'2024' or 'Ongoing'"
        required
      />
    </>
  );
};

const AddCompany = ({ state }) => {
  return (
    <div className="form-field-wrapper">
      <p>Add new company</p>
      <label htmlFor="company">Company name</label>
      <input
        type="text"
        id="company"
        name="newCompany"
        placeholder="Company name"
        required
      />
      <label htmlFor="description">Company description</label>
      <input
        type="text"
        id="description"
        name="newDescription"
        placeholder="Company description"
        required
      />
      <label htmlFor="address">Company address</label>
      <input
        type="text"
        id="address"
        name="newAddress"
        placeholder="Company address"
        required
      />
      <AddRole state={state} />
      <button onClick={(e) => addNewCompany(e.target.form, state)}>
        Add Company
      </button>
    </div>
  );
};

export default function ExperienceForm({ state }) {
  const data = state[0];
  return (
    <>
      {data.experience.map((item) => {
        return (
          <Fragment key={item.id}>
            <CompanyComp
              id={item.id}
              name={item.company}
              address={item.address}
              role={item.role}
              state={state}
            />
          </Fragment>
        );
      })}
      <AddCompany state={state} />
    </>
  );
}
