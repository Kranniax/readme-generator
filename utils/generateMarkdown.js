// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Object destructuring of inputted answers.
  const {
    title,
    description,
    installation,
    usage,
    contribution,
    test,
    license,
    ...questions
  } = data;

  return `
![License:${license} ](https://img.shields.io/badge/license-${license}-blue)

# ${title}

## Description
${description}


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## Contributions

${contribution}

## License

${license}

## Tests

${test}

## Questions
Please feel free to checkout my other repositories : https://github.com/${questions.username}

For additional questions, reach me via email. Email: ${questions.email};

`;
}

export { generateMarkdown };
