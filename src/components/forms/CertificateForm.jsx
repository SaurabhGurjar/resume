import { Fragment } from "react";
import { Certificate } from "../../app-data/data";

const deleteCertificate = (id, state) => {
  const [data, setData] = state;
  const newData = { ...data };
  const remainingCertificates = [];
  newData.certificates.map((item) => {
    if (item.id !== id) {
      remainingCertificates.push(item);
    }
  });
  newData.certificates = remainingCertificates;
  setData(newData);
};

const addCertificate = (form, state) => {
  if (
    !form.newname.value.trim() ||
    !form.newprovider.value.trim() ||
    !form.newcompletedIn.value.trim()
  ) {
    return;
  }
  const [data, setData] = state;
  const newData = { ...data };
  newData.certificates.push(
    new Certificate(
      form.newname.value,
      form.newprovider.value,
      form.newcompletedIn.value
    )
  );
  setData(newData);
};

const handleChange = (id, element, state) => {
  const [data, setData] = state;
  const newData = { ...data };
  newData.certificates.forEach((item) => {
    if (item.id === id) {
      item[element.name] = element.value;
    }
  });
  setData(newData);
};

const CertificateComp = ({
  id,
  certificateName = "name",
  provider,
  completedIn,
  state,
}) => {
  return (
    <div className="form-field-wrapper">
      <label htmlFor={id + "name"}>Certificate</label>
      <input
        type="text"
        name="name"
        id={id + "name"}
        defaultValue={certificateName}
        placeholder="Certificate name"
        required
        onChange={(e) => handleChange(id, e.target, state)}
      />
      <label htmlFor={id + "provider"}>Institute</label>
      <input
        type="text"
        name="provider"
        id={id + "provider"}
        defaultValue={provider}
        placeholder="Institute name"
        required
        onChange={(e) => handleChange(id, e.target, state)}
      />
      <label htmlFor={id + "completedIn"}>Date of completion</label>
      <input
        type="text"
        name="completedIn"
        id={id + "completedIn"}
        defaultValue={completedIn}
        placeholder="Year"
        required
        onChange={(e) => handleChange(id, e.target, state)}
      />
    </div>
  );
};

const NewCertificateForm = ({ state }) => {
  return (
    <>
      <CertificateComp
        id="new"
        certificateName=""
        provider=""
        completedIn=""
        state={state}
      />
      <button onClick={(e) => addCertificate(e.target.form, state)}>
        Add certificate
      </button>
    </>
  );
};

export default function CertificateForm({ state }) {
  const data = state[0];
  return (
    <>
      {data.certificates.map((item) => {
        return (
          <Fragment key={item.id}>
            <CertificateComp
              id={item.id}
              certificateName={item.name}
              provider={item.provider}
              completedIn={item.completedIn}
              state={state}
            />
            <button onClick={() => deleteCertificate(item.id, state)}>
              Delete
            </button>
          </Fragment>
        );
      })}
      <NewCertificateForm state={state} />
    </>
  );
}
