// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return (license === 'None' ? ""
            : `![License: ${license}](https://img.shields.io/badge/License-${license.split(' ').join('%20')}-blue.svg)`)
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return (license === 'None' ? "" : 
  `(https://opensource.org/licenses/${license.split(' ').join('-')})`);
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return (license === 'None' ? "" : `This repo is licensed under the ${license} license.`);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}

  ## License:
  ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}\n
  ${renderLicenseSection(data.license)}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## Contributing
  ${data.contributions}

  ## Tests
      ${data.test}

  ## Questions:
  Please direct any questions you have about this repo to: 
  - <https://github.com/${data.github}>
  - <${data.email}>

`;
}

module.exports = generateMarkdown;
