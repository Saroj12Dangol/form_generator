const jsonFile = {
  section: [
    {
      title: "Intern Enrollment Form",
      input: [
        {
          ref: "nameRef",
          name: "name",
          label: "Name",
          value: "Saroj",
          type: "text",
          validator: {
            required: true,
            maxLength: 50,
            minLength: 10,
          },
          placeholder: "Enter your name",
        },
        {
          ref: "emailRef",
          name: "email",
          label: "Email",
          value: "saroj9823dangol@gmail.com",
          type: "email",
          validator: {
            required: true,
            maxLength: 50,
            minLength: 10,
          },
          placeholder: "Enter your email",
        },
        {
          ref: "phoneRef",
          name: "phone",
          label: "Phone",
          value: 9863485599,
          type: "number",
          validator: {
            required: false,
            maxLength: 10,
            minLength: 10,
          },
          placeholder: "Enter your Phone number",
        },
        {
          ref: "ageRef",
          name: "age",
          label: "Age",
          value: 23,
          type: "number",
          validator: {
            required: false,
            maxLength: 2,
            minLength: 1,
          },
          placeholder: "Enter your age",
        },
        {
          ref: "addressRef",
          name: "address",
          label: "Address",
          value: "Lele, Lalitpur",
          type: "string",
          validator: {
            required: true,
            maxLength: 50,
            minLength: 3,
          },
          placeholder: "Enter your age",
        },
      ],
    },
  ],
};

export default jsonFile;
