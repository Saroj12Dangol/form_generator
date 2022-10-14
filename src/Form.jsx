import React, { useState } from "react";
import jsonFile from "./jsonFile";
import classes from "./Form.module.css";
import { useRef } from "react";

function Form() {
  const references = useRef({});

  const [click, setClick] = useState(false);

  function hello(field) {
    if (
      field.validator.required &&
      references.current[field.ref].value === ""
    ) {
      return <p>required</p>;
    } else if (
      references.current[field.ref].value.length > field.validator.maxLength
    ) {
      return (
        <p>
          Too Long,Input between {field.validator.minLength} to{" "}
          {field.validator.maxLength}{" "}
        </p>
      );
    } else if (
      references.current[field.ref].value.length < field.validator.minLength
    ) {
      return (
        <p>
          Too Short, Input between {field.validator.minLength} to{" "}
          {field.validator.maxLength}{" "}
        </p>
      );
    }
  }

  const inputField = jsonFile.section.map((data, index) => {
    return data.input.map((field) => {
      return (
        <div>
          <label htmlFor={field.name} className={classes.label}>
            {field.label}:
          </label>
          <input
            ref={(value) => {
              references.current[field.ref] = value;
            }}
            className={classes.input}
            type={field.type}
            value={field.value}
            required={true}
            readOnly
          />
          {click ? hello(field) : ""}
        </div>
      );
    });
  });

  function enrollClicked(e) {
    e.preventDefault();
    setClick(true);

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
