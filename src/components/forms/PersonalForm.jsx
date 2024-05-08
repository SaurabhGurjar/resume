import InputFeild from "../shared/InputField";
import SocialLinkInput from "./SocialLinkInput";

const handleChange = (name, value, state) => {
  const [data, setData] = state;
  const newData = { ...data };
  newData.personalInfo[name] = value;
  setData(newData);
};

const SocialField = ({ state }) => {
  const data = state[0].personalInfo;
  const [linkedIn, gitHub, portfolio] = data.socialLinks;
  return (
    <div className="social-links">
      <h3>Links</h3>
      <SocialLinkInput id="linkedIn" inputName={linkedIn} state={state} />
      <SocialLinkInput id="gitHub" inputName={gitHub} state={state} />
      <SocialLinkInput id="portfolio" inputName={portfolio} state={state} />
    </div>
  );
};

export default function PersonalForm ({ state }) {
  const data = state[0].personalInfo;

  return (
    <>
      <InputFeild
        id="first-name"
        type="text"
        inputName="firstName"
        label="First name"
        value={data.firstName}
        state={state}
        onchange={handleChange}
      />
      <InputFeild
        id="last-name"
        type="text"
        inputName="lastName"
        label="Last name"
        value={data.lastName}
        state={state}
        onchange={handleChange}
      />
      <InputFeild
        id="role"
        type="text"
        label="Role"
        value={data.role}
        inputName="role"
        state={state}
        onchange={handleChange}
      />
      <InputFeild
        id="email"
        type="email"
        inputName="email"
        label="Email"
        value={data.email}
        state={state}
        onchange={handleChange}
      />
      <InputFeild
        id="phone-number"
        type="tel"
        label="Phone number"
        value={data.phoneNumber}
        inputName="phoneNumber"
        state={state}
        onchange={handleChange}
      />
      <InputFeild
        id="address"
        type="text"
        label="Address"
        value={data.address}
        inputName="address"
        state={state}
        onchange={handleChange}
      />
      <SocialField state={state} />
    </>
  );
}
