// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    },
    {
    type: 'input',
    name: 'description',
    message: 'What is the description of your project?',
    },
    {
    type: 'input',
    name: 'installation',
    message: 'What are your installation instructions?',
    },
    {
    type: 'input',
    name: 'usage',
    message: 'What are you usage details?',
    },
    {
    type: 'input',
    name: 'contribution',
    message: 'What are your contribution guidelines?',
    },
    {
    type: 'input',
    name: 'test',
    message: 'What command should be run to run tests?',
    default: 'npm test',
    },
    {
    type: 'list',
    name: 'license',
    message: 'Choose a liense for your application.',
    choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense']
    },
    {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
    },
    {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, generateMarkdown(data))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((userResponse) => {
        writeToFile("generatedREADME.md", userResponse)
    })
};

// Function call to initialize app
init();
