import React, { useState } from "react";
import jsonFile from "./jsonFile";
import classes from "./Form.module.css";

function Form() {
  let nameValues = {};

  jsonFile.section.map((data) => {
    return data.input.map((field) => {
      return (nameValues[field.name] = field.value);
    });
  });

  const [inputValues, setInputValues] = useState(nameValues);
  let errors = [];

  function validate(e) {
    const { name, value } = e.target;

    setInputValues({
      ...inputValues,
      [name]: value,
    });
  }

  function handleError(field) {
    if (field.validator.required && inputValues[field.name] === "") {
      errors.push("error");
      return <p>required</p>;
    } else if (inputValues[field.name].length > field.validator.maxLength) {
      errors.push("error");
      return (
        <p>
          Too Long,Input between {field.validator.minLength} to{" "}
          {field.validator.maxLength}{" "}
        </p>
      );
    } else if (
      inputValues[field.name].length < field.validator.minLength &&
      inputValues[field.name].length !== 0
    ) {
      errors.push("error");
      return (
        <p>
          Too Short, Input between {field.validator.minLength} to{" "}
          {field.validator.maxLength}{" "}
        </p>
      );
    }
  }

  const inputField = jsonFile.section.map((data) => {
    return data.input.map((field) => {
      return (
        <div>
          <label htmlFor={field.name} className={classes.label}>
            {field.label}:
          </label>
          <input
            name={field.name}
            className={classes.input}
            type={field.type}
            value={inputValues[field.name]}
            required={true}
            onChange={validate}
          />
          {handleError(field)}
        </div>
      );
    });
  });

  function enrollClicked(e) {
    e.preventDefault();
    if (errors.length === 0) {
      console.log(inputValues);
    }
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
