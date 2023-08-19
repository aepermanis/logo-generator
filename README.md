# logo-generator

## DESCRIPTION
   AS a freelance web developer
        I WANT to generate a simple logo for my projects
        SO THAT I don't have to pay a graphic designer 

    GIVEN a command-line application that accepts user input
        WHEN I am prompted for text
        THEN I can enter up to three characters
        WHEN I am prompted for the text color
        THEN I can enter a color keyword (OR a hexadecimal number)
        WHEN I am prompted for a shape
        THEN I am presented with a list of shapes to choose from: circle, triangle, and square
        WHEN I am prompted for the shape's color
        THEN I can enter a color keyword (OR a hexadecimal number)
        WHEN I have entered input for all the prompts
        THEN an SVG file is created named `logo.svg`
        AND the output text "Generated logo.svg" is printed in the command line
        WHEN I open the `logo.svg` file in a browser
        THEN I am shown a 300x200 pixel image that matches the criteria I entered

## Usage
    https://watch.screencastify.com/v/tlkGJHMGu0SadXULoaZ5
    

    Run node index.js and answer the prompts from inquirer. Te prompts will lead to the creation of an svg logo.

## Tests
    npm run test 

    tests the output of the shape class



## Credits 
    https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Getting_Started

