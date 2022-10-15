import React, { useMemo, useState } from "react";
import jsonFile from "./jsonFile";
import classes from "./Form.module.css";

function Form() {
  let nameValues = {};
  let validators = {};
  let Errors = []

  const [forFirst, setForFirst] = useState(false);

  const [currentInput, setCurrentInput] = useState({
    name: "",
    value: "",
  });

  jsonFile.section.map((data) => {
    return data.input.map((field) => {
      validators[field.name] = field.validator;
      return (nameValues[field.name] = field.value);
    });
  });

  const [inputValues, setInputValues] = useState(nameValues);
  let errors = [];

  function validate(e) {
    const { name, value } = e.target;
    setForFirst(true);
    setCurrentInput({ ...currentInput, name: name, value: value });

    setInputValues({
      ...inputValues,
      [name]: value,
    });
  }

  const checkValidity = () => {
    console.log("here");
    if (forFirst) {
      if (
        validators[currentInput.name].required &&
        inputValues[currentInput.name] === ""
      ) {
        Errors.push("error")
        document.getElementById(currentInput.name).innerHTML = "required";
        return;
      } else if (
        inputValues[currentInput.name].length >
        validators[currentInput.name].maxLength
      ) {
        Errors.push("error")
        document.getElementById(currentInput.name).innerHTML = "long";
        return;
      } else if (
        inputValues[currentInput.name].length <
          validators[currentInput.name].minLength &&
        inputValues[currentInput.name].length !== 0
      ) {
        Errors.push("error")
        document.getElementById(currentInput.name).innerHTML = "short";
        return;
      } else {
        document.getElementById(currentInput.name).innerHTML = "";
      }
    }
  };
  
  checkValidity();

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
          <p id={field.name}></p>
        </div>
      );
    });
  });

  function enrollClicked(e) {
    e.preventDefault();
    if (Errors.length === 0) {
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
