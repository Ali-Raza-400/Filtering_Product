import React from "react";

const Form1 = () => {
    const onSubmit =(e)=>{
        e.preventDefault();
        console.log(e.target[0].value);
        console.log(e.target[1].value);
        console.log(e.target[2].value);
    }
  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </form>
    </div>
  );
};

export default Form1;
