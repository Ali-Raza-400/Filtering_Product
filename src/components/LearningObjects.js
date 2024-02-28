import React from 'react';

const LearningObjects = () => {
    const obj = { a: 1, b: 2, c: 3 };
    console.log("object keys",Object.keys(obj));
    console.log("object enteries",Object.entries(obj).forEach(function([key, value]) {
        console.log(key + ": " + JSON.stringify(value));
      }));

  return (
    <div>
      Learning Object 
    </div>
  );
}

export default LearningObjects;
