import { makeBadge, ValidationError } from "badge-maker";

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }
  const format = {
    label: "license",
    message: license,
    color: "blue",
  };
  const svg = makeBadge(format);

  return `${svg}`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }
  switch (license) {
    case "MIT License":
      return `The MIT License is a permissive open-source license. It allows users to do almost anything with the code, like copying, modifying, merging, publishing, distributing, and even selling it, as long as the original copyright and license notice are included. [License Link](https://choosealicense.com/licenses/mit/)`;
    case "GNU General Public License (GPL)":
      return `The GNU GPL is a copyleft license. It allows users to freely use, modify, and distribute the software, but any distributed modifications must also be under the GPL, ensuring the same freedoms for downstream users. [License Link](https://choosealicense.com/licenses/gpl-3.0/)`;
    case "GNU Lesser General Public License (LGPL)":
      return `The LGPL is a more permissive version of the GPL, allowing the software to be used in proprietary programs, provided changes to the LGPL-licensed components are released under the same terms. [License Link](https://choosealicense.com/licenses/lgpl-3.0/)`;
    case "Apache License 2.0":
      return `The Apache License 2.0 is a permissive license. It allows users to use, modify, and distribute the software freely, but requires preservation of the license and notices, and grants a patent license to users of the software. [License Link](https://choosealicense.com/licenses/apache-2.0/)`;
    case "Mozilla Public License 2.0 (MPL 2.0)":
      return `The MPL 2.0 is a hybrid between permissive and copyleft licenses. It allows users to modify and distribute the software, but changes made to the original MPL-licensed code must be released under the MPL. Other parts of the project can remain proprietary. [License Link](https://choosealicense.com/licenses/mpl-2.0/)`;
    case "BSD License":
      return `The BSD License is a permissive open-source license similar to the MIT License. It allows for the software to be freely used and distributed, with minimal restrictions on reuse, requiring only that the copyright notice is preserved.`;
    case "Creative Commons Licenses":
      return `Creative Commons licenses are a set of licenses that allow creators to grant permissions for others to use their works under certain conditions, ranging from free use with attribution to more restrictive terms, like non-commercial use only.`;
    default:
      return "License not recognized. Please select a valid license.";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    return renderLicenseLink(license);
}

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
${renderLicenseBadge(license)}

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

${renderLicenseSection(license)}

## Tests

${test}

## Questions

Please feel free to checkout my other repositories : <https://github.com/${questions.username}>

For additional questions, reach me via email. Email: <${questions.email}>;
`;
}

export { generateMarkdown };
