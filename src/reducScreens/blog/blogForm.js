import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBlog } from "../../redux/blogSlice";
import { nanoid } from "@reduxjs/toolkit";
const BlogForm = () => {
  const [formFields, setFormFields] = useState({
    id: nanoid(),
    username: "",
    email: "",
    description: "",
    date: new Date().toISOString(),
  });
  const blogSate = useSelector((state) => state.blog);
  const dispatch = useDispatch();
console.log("data=======>111",(new Date()).toISOString());
console.log("data=======>222",(new Date()));
  const { username, email, description } = formFields;
  const onChange = (e) => {
    const { value, name } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date().toISOString();
    dispatch(addBlog({ ...formFields, timeStamp: currentDate }));
    // const updatedFormValuesArray = [...formValuesArray, { ...formFields }];
    setFormFields({
      id: nanoid(),
      username: "",
      email: "",
      description: "",
    });
    // setFormValuesArray(updatedFormValuesArray);
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
      <div>
        <h2>Form Values:</h2>
        <ul>
          {blogSate.map((entry, index) => {
            console.log("entry", entry);
            return (
              <li key={index}>
                <p>Id: {entry.id}</p>
                <p>Username: {entry.username}</p>
                <p>Email: {entry.email}</p>
                <p>Description: {entry.description}</p>
                <p>Date: {entry.timeStamp}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default BlogForm;
