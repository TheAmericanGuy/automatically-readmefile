// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'Input Project Title',
}, 
{
    type: 'input',
    name: 'description',
    message: 'Write a short description about your project',
},
{
    type: 'input',
    name: 'motivation',
    message: 'What was your motivation?',
},
{
    type: 'input',
    name: 'reason',
    message: 'Why did you build this project?',
},
{
    type: 'input',
    name: 'solution',
    message: 'What problem does it solve?',
},
{
    type: 'input',
    name: 'learned',
    message: 'What did you learn?',
},
{
    type: 'input',
    name: 'installation',
    message: 'Please input installation guide',
},
{
    type: 'input',
    name: 'use',
    message: 'How to use? Provide screenshots if needded',
},
{
    type: 'input',
    name: 'credits',
    message: 'List of collaborators, thrid-party assets, or tutorials',
},
{
    type: 'list',
    name: 'license',
    message: 'Please choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPL', 'None'],
},
{
    type: 'input',
    name: 'features',
    message: 'Add features (If any):',
},
{
    type: 'input',
    name: 'contribution',
    message: 'Add how people can contribute for your project:',
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Failed Attempt', err);
        } else {
            console.log('README.md has been successfully generated!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile('README.md', markdown);
    });
}

// Function call to initialize app
init();
