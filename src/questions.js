// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the project title for this repository?",
    validate: (projectTitle) => {
      if (projectTitle) {
        return true;
      } else {
        console.log("Please enter a project title!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "What is the description for this repository",
    validate: (projectDescription) => {
      if (projectDescription) {
        return true;
      } else {
        console.log("Please enter a project description!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions for this repository?",
  },
  {
    type: "input",
    name: "usage",
    message: "What are some usage information for this repository?",
  },
  {
    type: "input",
    name: "contribution",
    message: "Who contributed to this repository?",
  },
  {
    type: "input",
    name: "test",
    message: "What are the test instructions?",
  },
  {
    type: "list",
    name: "license",
    message: "Please select the appropriate license for this repository",
    choices: [
      "MIT License",
      "GNU General Public License (GPL)",
      "GNU Lesser General Public License (LGPL)",
      "Apache License 2.0",
      "Mozilla Public License 2.0 (MPL 2.0)",
      "BSD License",
      "Creative Commons Licenses",
    ],
  },
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];
 export {questions};