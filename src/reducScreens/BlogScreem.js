import React, { useState } from "react";

const BlogScreen = () => {
  const [formFields, setFormFields] = useState({
    username: "",
    email: "",
    description: "",
  });
  const { username, email, description } = formFields;

  const [formValuesArray, setFormValuesArray] = useState([]);

  const onChange = (e) => {
    const { value, name } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const updatedFormValuesArray = [...formValuesArray, { ...formFields }];
    setFormFields({
      username: "",
      email: "",
      description: "",
    });
    setFormValuesArray(updatedFormValuesArray);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={onChange}
        />
        <input type="email" name="email" value={email} onChange={onChange} />
        <input
          type="text"
          name="description"
          value={description}
          onChange={onChange}
        />
        <button type="submit">Add Fields</button>
      </form>
      {/* Render the list of form values below the form */}
      <div>
        <h2>Form Values:</h2>
        <ul>
          {formValuesArray.map((entry, index) => (
            <li key={index}>
              <p>Username: {entry.username}</p>
              <p>Email: {entry.email}</p>
              <p>Description: {entry.description}</p>
              <p>Date : {entry?.timeStamp}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogScreen;
