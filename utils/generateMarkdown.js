// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return (license ? 
            `[![License: ${license}](https://img.shields.io/badge/License-${license.split(' ').join('%20')}-blue.svg)]`
            : "")
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return (license ? `(https://opensource.org/licenses/${license.split(' ').join('-')})` : "");
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return (license ? `This repo is license under the ${license} license.` : "");
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}

  ## License:
  ${data.license}

  ## Table of Contents
  *[Installation] (##Installation)
  *[Usage] (##Usage)
  *[Contributing] (##Contributing)
  *[Tests] (##Tests)
  *[Questions] (##Questions)

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
