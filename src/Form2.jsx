import React, { useMemo, useState } from "react";
import jsonFile from "./jsonFile";
import classes from "./Form.module.css";

function Form2() {
  let nameValues = {};
  let validators = {};

  const [errors, setErrors] = useState({});
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

  function validate(e) {
    const { name, value } = e.target;
    setForFirst(true);
    setCurrentInput({ ...currentInput, name: name, value: value });

    setInputValues({
      ...inputValues,
      [name]: value,
    });
  }

  useMemo(() => {
    console.log("hello called");
    if (forFirst) {
      if (
        validators[currentInput.name].required &&
        inputValues[currentInput.name] === ""
      ) {
        setErrors({ ...errors, [currentInput.name]: "required" });
        return;
      } else if (
        inputValues[currentInput.name].length >
        validators[currentInput.name].maxLength
      ) {
        setErrors({ ...errors, [currentInput.name]: "long" });
        return;
      } else if (
        inputValues[currentInput.name].length <
          validators[currentInput.name].minLength &&
        inputValues[currentInput.name].length !== 0
      ) {
        setErrors({ ...errors, [currentInput.name]: "short" });
        return;
      } else {
        setErrors({...errors, [currentInput.name]:undefined});
      }
    }
  }, [inputValues[currentInput.name]]);
  console.log(errors);
  if (errors[currentInput.name]) {
    console.log(errors);
    console.log(errors[currentInput.name]);
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
          {errors[field.name] && <p>{errors[field.name]}</p>}
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
export default Form2;
