import React from "react";
import jsonFile from "./jsonFile";
import classes from "./Form.module.css";

function Form() {
  const inputField = jsonFile.section.map((data, index) => {
    return data.input.map((field) => {
      return (
        <div>
          <label htmlFor={field.name} key={data + index} className={classes.label}>
            {field.label}:
          </label>
          <input className={classes.input}
            key={index + index}
            type={field.type}
            value={field.value}
            required={field.required}
            readOnly
          />
        </div>
      );
    });
  });

  return (
    <div>
      <form>
        {jsonFile.section.map((data, index) => {
          return <h1 key={data + index}>{data.title}</h1>;
        })}
        <div className={classes.container}>
          <div className={classes.inputField_div}>
            {inputField}
            <button className={classes.btnClick}>Enroll</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
