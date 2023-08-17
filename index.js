var inquirer = require('inquirer');
const fs = require('fs');

const questions = 
[
   {
    type: 'maxlength-input',
    name: 'text',
    message: 'Enter your acronym',
    maxLength: 3,
   },
   {
    type: 'input',
    name: 'textColor',
    message: 'What color do you want your text'
   },
   {
    type: 'list',
    name: 'shape',
    message: 'Choose your shape',
    choices: ["triangle","circle","square"]
   },
   {
    type: 'input',
    name: 'shapeColor',
    message: 'What color do you want your shape'
   },

];

function writeToFile(fileName, data) {
    const svg = generateShapes(data)
    fs.writeFileSync(fileName,svg);
    
    
}

function init() {
    inquirer.prompt(questions).then((answers) =>{
        writeToFile(answers.text, answers)
    })
};

init()