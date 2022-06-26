// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [ {
    type: 'input',
    name: 'title',
    message: 'What is the name of the project?',
},
{
    type: 'input',
    name: 'username',
    message: 'What is the name of your Githun username?',
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email?',
},
{
    type: 'input',
    name: 'description',
    message: 'What is the project description?',
},
{
    type: 'list',
    choices: ['mit', 'apache 2.0', 'bsd3'],
    name: 'license',
    message: 'What is the license?',
},
{
    type: 'input',
    name: 'installation',
    message: 'What are the installation commands?',
},
{
    type: 'input',
    name: 'testing',
    message: 'What commands do you need for testing?',
},
{
    type: 'input',
    name: 'usage',
    message: 'What is the usage?',
},
{
    type: 'input',
    name: 'contributors',
    message: 'Who are the contributors?',
},


];

// TODO: Create a function to write README file
function writeToFile(template) {
    fs.writeFile('readme.md', template, (err) => {
        if(err) {
            console.log('There is an error', err) 
        } else {
            console.log('File has been created')
        }
    })

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
    console.log(response)
    console.log(response.title)
    const template = generateMarkdown(response)
    console.log(template)
    writeToFile(template)
    })
    
};

// Function call to initialize app
init();
