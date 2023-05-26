// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// Importing from shapes.lib
const { Triangle, Circle, Square } = require("./lib/shapes");

// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter text upto 3 characters only",
    validate: (titleInput) => {
      if (titleInput.length > 3) {
        console.log("Re-enter text upto 3 characters only");
        return false;
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter color for text in standard or hex format (e.g, #ffgghh)",
    validate: (textColorInput) => {
      if (!textColorInput) {
        console.log(
          "Please enter text color in standard or hex format (e.g, #ffgghh)"
        );
        return false;
      } else {
        return true;
      }
    },
  },
  {
    type: "list",
    name: "shape",
    message: "Select a Shape for the logo",
    choices: ["Triangle", "Circle", "Square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message:
      "Please enter shape color in standard or hex format (e.g, #ffgghh)",
    validate: (colorInput) => {
      if (!colorInput) {
        console.log(
          "Please enter shape color in standard or hex format (e.g, #ffgghh)"
        );
        return false;
      } else {
        return true;
      }
    },
  },
];



// SVG opening tag for all.
const svgXmlOpeningTag = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;

// SVG closing tag for all.
const svgXmlClosingTag = `</svg>`;

// Function to write SVG file
function generateLogo(data) {
  let svgFile = "";

  // Text tag for triangle
  const svgXmlTriangleTextTag = `<text x="150" y="140" font-size="50" text-anchor="middle" fill="${data.textColor}">${data.title}</text>`;

  //Text tag for other shapes
  const svgXmlTextTag = `<text x="150" y="120" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.title}</text>`

  // Code below per user shape selection renders the shape properties from their respective classes in shapes.js
  // and generates svg xml to the svgFile variable 

  if (data.shape === "Triangle") {
    const triangle = new Triangle();
    triangle.setColor(data.shapeColor);
    svgFile = `${svgXmlOpeningTag} ${triangle.render()} ${svgXmlTriangleTextTag} ${svgXmlClosingTag}`;
    
  
  } else if (data.shape === "Circle") {
    const circle = new Circle();
    circle.setColor(data.shapeColor);
    svgFile = `${svgXmlOpeningTag} ${circle.render()} ${svgXmlTextTag} ${svgXmlClosingTag}`;
    
  } else if (data.shape === "Square") {
    const square = new Square();
    square.setColor(data.shapeColor);
    svgFile = `${svgXmlOpeningTag} ${square.render()} ${svgXmlTextTag} ${svgXmlClosingTag}`;    
    
  }
  return svgFile;
}


// Function to initialize 
function init() {
  inquirer.prompt(questions).then((response) => {
    const generatedLogo = generateLogo(response);
    
    // Path Filename and data to logo.svg to show example
    writeToSvgFile("./examples/logo.svg", generatedLogo);

    // Path Filename and data to logo.html to view in browser
    writeToHtmlFile("./examples/logo.html", generatedLogo);
  });
}

// Function to write to svg file and error handling function to catch errors if any
function writeToSvgFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Generated Logo.svg!!")
  );
}

// Function to write to html file and error handling function to catch errors if any
function writeToHtmlFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Generated Logo.html!!")
  );
}

// Function call to initialize 
init();
