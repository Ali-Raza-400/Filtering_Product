import React, { useState } from "react";
const Example1 = () => {
  const [fromValue, setFormValues] = useState({
    username: "",
    email: "",
    gender: "",
    dob: "",
  });
  const handleChange = (event) => {
    setFormValues({ ...fromValue, [event.target.name]: event.target.value });
  };

  const [addsection, setAddSection] = useState([
    { hobbies: "", description: "", timeStamp: new Date().getTime() },
  ]);
  const handleAddSectionChange=(e,i)=>{
    const {name,value} = e.target;
    let newSection = [...addsection];
    newSection[i][name] = value;
    setAddSection(newSection);
  }

const AddSectionHandler=()=>{
  setAddSection([...addsection, {hobbies: "", description: "", timeStamp: new Date().getTime()}])
}
const deleteSectionHandler = (abc) => {
  const {timeStamp}=abc
  const newSections = addsection.filter(section => section.timeStamp !== timeStamp);
  setAddSection(newSections);
};
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "120px",
      }}
    >
      <h2>Learning Forms</h2>
      <input
        placeholder="Enter username"
        name="username"
        type="text"
        onChange={handleChange}
        style={{ marginBottom: "8px" }}
      />
      <br />
      <input
        placeholder="Enter email"
        name="email"
        type="email"
        onChange={handleChange}
        style={{ marginBottom: "8px" }}
      />
      <br />
      <select
        placeholder="Enter Gender"
        name="gender"
        onChange={handleChange}
        style={{ marginBottom: "8px" }}
      >
        <option>gender</option>
        <option value="male">male</option>
        <option value="female">female</option>
        <option value="none">none</option>
      </select>
      <input
        placeholder="Enter email"
        name="dob"
        type="date"
        max="2022-12-31"
        onChange={handleChange}
        style={{ marginBottom: "8px" }}
      />
      <br />
      {addsection.map((currentSection, index) => {
        return (
          <div key={currentSection.timeStamp} style={{ display: "flex", flexDirection: "column" }}>
            <select
              placeholder="Select hobbie"
              name="hobbies"
              onChange={(e)=>handleAddSectionChange(e,index)}
              style={{ marginBottom: "8px" }}
            >
              <option>Select hobbies</option>
              <option value="male">gaming</option>
              <option value="female">coding</option>
              <option value="none">shopping</option>
            </select>
            <textarea id="w3review" name="description" rows="4" cols="30"  onChange={(e)=>handleAddSectionChange(e,index)}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            </textarea>
            <button onClick={()=>deleteSectionHandler(currentSection)} type="submit">Delete Section</button>
          </div>
        );
      })}
      <button onClick={AddSectionHandler} type="submit">Add Section</button>
    </div>
  );
};

export default Example1;
