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
    !form.newName.value.trim() ||
    !form.newProvider.value.trim() ||
    !form.newCompletedIn.trim()
  ) {
    return;
  }

  const [data, setData] = state;
  const newData = { ...data };
  newData.certificates.push(
    new Certificate(
      form.newName.value,
      form.newProvider.value,
      form.newCompletedIn
    )
  );
  setData(newData);
};

const CertificateComp = ({
  id,
  certificateName,
  provider,
  completedIn,
  state,
}) => {
  return (
    <div className="form-field-wrapper">
      <label htmlFor={id + "name"}>Certificate</label>
      <input
        type="text"
        name={id + "Name"}
        id={id + "certificateName"}
        defaultValue={certificateName}
        placeholder="Certificate name"
        required
      />
      <label htmlFor={id + "provider"}>Institute</label>
      <input
        type="text"
        name={id + "Provider"}
        id={id + "provider"}
        defaultValue={provider}
        placeholder="Institute name"
        required
      />
      <label htmlFor={id + "completedIn"}>Date of completion</label>
      <input
        type="text"
        name={id + "CompletedIn"}
        id={id + "completedIn"}
        defaultValue={completedIn}
        placeholder="Year"
        required
      />
    </div>
  );
};

const NewCertificateForm = ({ state }) => {
  return (
    <>
      <CertificateComp id="new" state={state} />
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
