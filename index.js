// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

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
    message: "Please enter shape color in standard or hex format (e.g, #ffgghh)",
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

// Function to write SVG file

function generateLogo(data) {
  let svgFile = "";

  if (data.shape === "Triangle") {
    svgFile = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
      <polygon width ="300" height ="200" points="150, 18 244, 182 56, 182" fill="${data.shapeColor}" />
                  <text x="150" y="125" font-size="50" text-anchor="middle" fill="${data.textColor}">${data.title}</text>
                  </svg> `;
  } else if (data.shape === "Circle") {
    svgFile = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="80" fill="${data.shapeColor}" /> 
                  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.title}</text> 
                  </svg>`;
  } else if (data.shape === "Square") {
    svgFile = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width ="300" height ="200"  fill="${data.shapeColor}" />
                  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.title}</text>
                  </svg>`;
  }
  return svgFile;
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    const generatedLogo = generateLogo(response);

    // Path and data to logo.svg to show example
    writeToSvgFile("./examples/logo.svg", generatedLogo);

    // Path and data to logo.html to view in browser
    writeToHtmlFile("./examples/logo.html", generatedLogo);
  });
}

// Function to write to svg file and catch error if any
function writeToSvgFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Generated Logo.svg!!")
  );
}

// Function to write to html file and catch error if any
function writeToHtmlFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Generated Logo.html!!")
  );
}

// Function call to initialize app
init();
