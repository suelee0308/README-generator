// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return (license === 'None' ? ""
            : `![License: ${license}](https://img.shields.io/badge/License-${license.split(' ').join('%20')}-blue.svg)`)
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return (license === 
    'Apache 2.0' ? "https://opensource.org/licenses/Apache-2.0" :
    'MIT' ? "https://opensource.org/licenses/MIT" : 
    'GNU General Public License v3.0' ? "https://opensource.org/licenses/GPL-3.0" :
    'BSD 2-Clause' ? "https://opensource.org/licenses/BSD-2-Clause" :
    'BSD 3-Clause' ? "https://opensource.org/licenses/BSD-3-Clause" :
    'Boost Software License 1.0' ? "https://choosealicense.com/licenses/bsl-1.0/" :
    'Eclipse Public License 2.0' ? "https://opensource.org/licenses/EPL-2.0" :
    'GNU Affero General Public License v3.0' ? "https://opensource.org/licenses/LGPL-3.0" :
    'GNU General Public License v2.0' ? "https://opensource.org/licenses/LGPL-2.0" :
    'GNU Lesser General Public License v2.1' ? "https://opensource.org/licenses/LGPL-2.1" :
    'Mozilla Public License 2.0' ? "https://opensource.org/licenses/MPL-2.0" :
    'The Unlicense' ? "https://choosealicense.com/licenses/unlicense/" :
    ''
    );
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
  ${renderLicenseBadge(data.license)}\n
  ${renderLicenseLink(data.license)}\n
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
