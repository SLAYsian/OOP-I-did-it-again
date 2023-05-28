// SECTION: REQUIRE
const fs = require('fs');
const { Circle, Square, Triangle} = require('./shapes');
const path = require('path');

// SECTION: LOGO GENERATOR CLASS
class LogoGenerator {
  // NOTES: Generate logo method
  generateLogo(userInput){
  //NOTES: Switch statement - creating instance based on user input 
    let shape;
    // NOTES: Upadted for border color
    switch(userInput.shape){
      case 'circle':
        shape = new Circle(userInput.shapeColor, userInput.textColor);
        break;
      case 'triangle':
        shape  = new Triangle(userInput.shapeColor, userInput.textColor);
        break;
      case'square':
        shape = new Square(userInput.shapeColor, userInput.textColor);
        break;
    }

    // NOTES: Create svg shape using render method on shape
    const svgShape = shape.render()
    // NOTES: Text
    const svgText = `<text x="100" y="100" text-anchor="middle" dominant-baseline="middle"  style="fill:${userInput.textColor}; font-size:35px;">${userInput.text}</text>`;
    // NOTES: Replace closing tag to include text inside svg tag
    const svg = svgShape.replace('</svg>', `${svgText}</svg>`);

    // NOTES: Write svg to file
    fs.writeFileSync(path.join(__dirname, '../examples/logo.svg'), svg);
    console.log('Generated logo.svg!');
    // NOTES: Return svg
    return svg;
  }
}

module.exports = LogoGenerator;

