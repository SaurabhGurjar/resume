import InputFeild from "../shared/InputField";

const MAX_ALLOWED_SOCIAL_LINK = 2;

const linkFeildHasAValue = (e, id) => {
  const val = e.target.form[id + "-" + "input"].value;
  if (isNaN(Number(val)) && val) {
    return true;
  }
  return false;
};

export default function SocialLinkInput({ id, inputName, state }) {
  const handleLinkChange = (name, value, state) => {
    const [data, setData] = state;
    const newData = { ...data };
    const newSocialArr = [];
    data.personalInfo.socialLinks.forEach((item) => {
      if (item.name === name) {
        const newLink = { ...item };
        newLink.link = value;
        newSocialArr.push(newLink);
      } else {
        newSocialArr.push(item);
      }
    });
    newData.personalInfo.socialLinks = newSocialArr;
    setData(newData);
  };

  const removeLink = (id, state) => {
    const [data, setData] = state;
    const newData = { ...data };
    const newSocialArr = [];
    data.personalInfo.socialLinks.forEach((item) => {
      if (item.name !== id) {
        newSocialArr.push(item);
      }
    });
    newData.personalInfo.socialLinks = newSocialArr;
    setData(newData);
  };

  const addLink = (linkName, linkVal, state) => {
    const [data, setData] = state;

    if (data.personalInfo.socialLinks.length < MAX_ALLOWED_SOCIAL_LINK) {
      const newData = { ...data };
      const newSocialArr = [];
      data.personalInfo.socialLinks.forEach((item) => {
        if (item.name === linkName) {
          return;
        } else {
          newSocialArr.push(item);
        }
      });

      newSocialArr.push({ name: linkName, link: linkVal });
      newData.personalInfo.socialLinks = newSocialArr;
      setData(newData);
    }
  };

  return (
    <div className="link-field-wrapper">
      <InputFeild
        id={id + "-" + "input"}
        type="text"
        inputName={id}
        label={id}
        value={inputName ? inputName.link : ""}
        state={state}
        onchange={handleLinkChange}
      />
      <div className="link-add-remove-button-wrapper">
        <button
          id={inputName ? inputName.name + "removeBtn" : null}
          className="remove-feild"
          onClick={(e) => {
            if (e.nativeEvent.pointerId < 0) return;
            // const linkVal = e.target.form[id + "-" + "input"].value;
            if (linkFeildHasAValue(e, id)) {
              removeLink(id, state);

              //   May be required in future
              //   e.target.form[id + "input"].value = "";
            }
          }}
        >
          Link -
        </button>
        <button
          id={id + "addBtn"}
          className="add-field"
          onClick={(e) => {
            const linkVal = e.target.form[id + "-" + "input"].value;
            if (linkFeildHasAValue(e, id)) {
              addLink(id, linkVal, state);
            }
          }}
        >
          Link +
        </button>
      </div>
    </div>
  );
}
