// TODO: Include packages needed for this application
import inquirer from "inquirer";
import { generateMarkdown } from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the project title for this repository?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description for this repository",
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    return generateMarkdown(answers);
});

}

// Function call to initialize app
init();
