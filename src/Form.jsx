import React from "react";
import jsonFile from "./jsonFile";
import classes from "./Form.module.css";
import { useRef } from "react";

function Form() {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const ageRef = useRef();

  const reference = [nameRef, emailRef, phoneRef, ageRef];

  const inputField = jsonFile.section.map((data, index) => {
    return data.input.map((field, index) => {
      return (
        <div>
          <label htmlFor={field.name} className={classes.label}>
            {field.label}:
          </label>
          <input
            ref={reference[index]}
            className={classes.input}
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

  function enrollClicked(e) {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(phoneRef.current.value);
    console.log(emailRef.current.value);
    console.log(ageRef.current.value);
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
