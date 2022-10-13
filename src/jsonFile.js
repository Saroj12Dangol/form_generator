const jsonFile = {
  section: [
    {
      title: "Intern Enrollment Form",
      input: [
        {
          name: "name",
          label: "Name",
          value: "Saroj Dangol",
          type: "text",
          required: true,
          placeholder: "Enter your name",
        },
        {
          name: "email",
          label: "Email",
          value: "saroj9823dangol@gmail.com",
          type: "email",
          required: true,
          placeholder: "Enter your email",
        },
        {
          name: "phone",
          label: "Phone",
          value: 9863485599,
          type: "number",
          required: false,
          placeholder: "Enter your Phone number",
        },
        {
          name: "age",
          label: "Age",
          value: 23,
          type: "number",
          required: false,
          placeholder: "Enter your age",
        },
      ],
    },
  ],
};

export default jsonFile;
