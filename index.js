// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import { questions } from "./src/questions.js";
import { generateMarkdown } from "./utils/generateMarkdown.js";

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("./dist/" + fileName, data, (err) => {
    if (err) throw err;
    console.log("The file has been created!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdownPage = generateMarkdown(answers);

    writeToFile("README.md", markdownPage);
  });
}

// Function call to initialize app
init();
