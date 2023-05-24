// SECTION: REQUIRE MODULES
const inquirer = require("inquirer");

// SECTION: INPUT HANDLER CLASS
class InputHandler {
getUserInput() {
  const questions = [
    {
      type: "input",
      name: "text",
      message: "What text would you like to appear on your logo? Please enter up to 3 characters.",
      validate: (value) => {
        // TODO: Write Code
        // if length is > 3
      }
    },
    {
      type: "input",
      name: "textColor",
      message: "What color would you like your for your text? Please enter a color keyword or a hexidecimal color code.",
      validate: (value) => {
        // TODO: Write Code
      }
    },
    {
      type: "list",
      name: "shape",
      message: "Please choose a shape",
      choices: ["circle", "square", "triangle"]
    },
    {
      type: "input",
      name: "shapeColor",
      message: "What color would you like for your shape? Please enter a color keyword or a hexidecimal color code.",
      validate: (value) => {
        // TODO: Write Code
      }
    }
    ];
  return new Promise ((resolve, reject)
    // TODO: Write Code

    .then(() => {
  
    })
    .catch(() => {
  
    })
  );
}
}


// SECTION: EXPORT
