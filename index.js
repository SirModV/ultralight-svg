const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shapes");

inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Enter text (up to 3 characters):",
      validate: (input) => input.length <= 3 || "Please pick 3 characters:",
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter a color (color keyword or hexadecimal):",
    },
    {
      type: "list",
      name: "shape",
      message: "Pick a shape:",
      choices: ["triangle", "circle", "square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter shape color (color keyword or hexadecimal):",
    },
  ])
  .then((answers) => {
    let shape;
    switch (answers.shape) {
      case "triangle":
        shape = new Triangle();
        break;
      case "circle":
        shape = new Circle();
        break;
      case "square":
        shape = new Square();
        break;
    }
    shape.setColor(answers.shapeColor);

    const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}<text x="150" y="110" font-family="Arial" font-size="40" fill="${answers.textColor}" text-anchor="middle">${answers.text}</text></svg>`;

    fs.writeFileSync("output/logo.svg", svg);
    console.log("Output logo.svg");
  });
