import React from "react";
import jsonFile from "./jsonFile";
import classes from "./Form.module.css";
import { useRef } from "react";

function Form() {
  
    const references = useRef({})


  const inputField = jsonFile.section.map((data, index) => {
    return data.input.map((field) => {
      return (
        <div>
          <label htmlFor={field.name} className={classes.label}>
            {field.label}:
          </label>
          <input
            ref={(value)=>{references.current[field.ref] = value}}
            className={classes.input}
            type={field.type}
            value={field.value}
            required={field.required}
            readOnly
          />
        </div>
      );
    });
  });

  function enrollClicked(e) {
    e.preventDefault();
    const keys = Object.keys(references.current)
    keys.forEach((key)=>{
        console.log(references.current[key].value);
    })

  }

  return (
    <div>
      <form>
        {jsonFile.section.map((data, index) => {
          return <h1>{data.title}</h1>;
        })}
        <div className={classes.container}>
          <div className={classes.inputField_div}>
            {inputField}
            <button className={classes.btnClick} onClick={enrollClicked}>
              Enroll
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
