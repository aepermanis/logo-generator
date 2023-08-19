var inquirer = require('inquirer');
const fs = require('fs');
const {Shape, triangle, square, circle}= require('./lib/shapes')

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
    if (data.shape === 'triangle'){
        let tri = new triangle(data.shapeColor, data.textColor, data.text);
        let triSvg = tri.svgGenerator()
        fs.writeFileSync(fileName, triSvg);
    } else if (data.shape === 'circle'){
        let cir = new circle(data.shapeColor, data.textColor, data.text);
        let cirSvg = cir.svgGenerator()
        fs.writeFileSync(fileName, cirSvg);
    }else{
        let squ = new square(data.shapeColor, data.textColor, data.text);
        let squSvg = squ.svgGenerator()
        console.log(squSvg);
        fs.writeFileSync(fileName, squSvg);

    };   
}

function init() {
    inquirer.prompt(questions).then((answers) =>{
        writeToFile(`${answers.text}.svg`, answers)
    })
};

init()