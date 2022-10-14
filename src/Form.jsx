import React, { useEffect, useState } from "react";
import jsonFile from "./jsonFile";
import classes from "./Form.module.css";
import { useRef } from "react";

function Form() {
  const references = useRef({});

  let nameValues = {};
  const validators = {};

  jsonFile.section.map((data) => {
    return data.input.map((field) => {
      Object.keys(field.validator).forEach((key) => {
        validators[key] = field.validator[key];
      });
      return (nameValues[field.name] = field.value);
    });
  });

  const [inputValues, setInputValues] = useState(nameValues);
  console.log("validators", validators, inputValues);

  function validate(e) {
    const { name, value } = e.target;

    setInputValues({
      ...inputValues,
      [name]: value,
    });
  }

  console.log(inputValues);

  function handleError(field) {
    console.log("hello called");
    if (field.validator.required && inputValues[field.name] === "") {
      return <p>required</p>;
    } else if (inputValues[field.name].length > field.validator.maxLength) {
      return (
        <p>
          Too Long,Input between {field.validator.minLength} to{" "}
          {field.validator.maxLength}{" "}
        </p>
      );
    } else if (inputValues[field.name].length < field.validator.minLength && inputValues[field.name].length!==0) {
      return (
        <p>
          Too Short, Input between {field.validator.minLength} to{" "}
          {field.validator.maxLength}{" "}
        </p>
      );
    }
  }

  const inputField = jsonFile.section.map((data) => {
    return data.input.map((field, index) => {
      // console.log(field);
      return (
        <div>
          <label htmlFor={field.name} className={classes.label}>
            {field.label}:
          </label>
          <input
            ref={(value) => {
              references.current[field.ref] = value;
            }}
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
    const keys = Object.keys(references.current);

    keys.forEach((key) => {
      console.log(references.current[key].value);
    });
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
