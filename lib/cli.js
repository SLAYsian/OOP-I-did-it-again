// SECTION: REQUIRE MODULES
const inquirer = require("inquirer");
const LogoGenerator = require("./logoGenerator");

// SECTION: VALIDATE COLOR FUNCTION
function validateColor(answer) {
  // NOTES: Check CSS Standard Color Keywords
  const cssColorKeywords = ['black', 'silver', 'gray', 'grey', 'white', 'maroon', 'red', 'purple', 'fuchsia', 'magenta', 'green', 'lime', 'olive', 'orange', 'yellow', 'navy', 'blue', 'teal', 'aqua', 'cyan']
  if (cssColorKeywords.includes(answer.toLowerCase())) {
    return true;
  } 
  // NOTES: Check hexidecimal Color
  const hexColorRegex = /^#([0-9A-F]{3}){1,2}$/i;
  if (hexColorRegex.test(answer)) {
    return true;
  }
  return 'Please enter a valid CSS standard color keyword or hexadecimal color code!'
}

// SECTION: CLI CLASS
class CLI {
getUserInput() {
   // NOTES: Questions
  const questions = [
    {
      type: "input",
      name: "text",
      message: "What text would you like to appear on your logo? Please enter up to 3 characters.",
      validate: (userInput) => {
        // TODO: Write Code
      if (userInput.length > 3) {
          return 'Please enter no more that 3 characters. Please try again!'
        } else {
          return true;
        }
      }
    },
    {
      type: "input",
      name: "textColor",
      message: "What color would you like your for your text? Please enter a color keyword or a hexidecimal color code.",
      validate:
        // TODO: assign validateColor function
        validateColor
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
      validate:
        // TODO: assign validateColor function
        validateColor
    }
    ];
    // NOTES: Promise
  return new Promise ((resolve, reject) => {
    // TODO: Write Code
    inquirer.prompt(questions)
      .then(answers => {
        resolve(answers);
      })
      .catch(err => {
        reject(err);
      });
    });
  }
  run() {
    this.getUserInput()
     .then(userInput => {
        // TODO: Write Code
        const logoGenerator = new LogoGenerator()
       logoGenerator.generateLogo(userInput)
    })
    .catch(err => {
      console.error(err);
    });
  }
}

// SECTION: EXPORT
module.exports = CLI;
