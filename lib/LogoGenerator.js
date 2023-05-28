// SECTION: REQUIRE
const fs = require('fs');
const { Circle, Square, Triangle} = require('./shapes');

// SECTION: LOGO GENERATOR CLASS
class LogoGenerator {
  // NOTES: Generate logo method
  generateLogo(userInput){
  //NOTES: Switch statement - creating instance based on user input 
    let shape;
    switch(userInput.shape){
      case 'circle':
        shape = new Circle(userInput.shapeColor);
        break;
      case 'triangle':
        shape  = new Triangle(userInput.shapeColor);
        break;
      case'square':
        shape = new Square(userInput.shapeColor);
        break;
    }

    // NOTES: Create svg shape using render method on shape
    const svgShape = shape.render()
    // NOTES: Text
    const svgText = `<text x="50" y="50" style="fill:${userInput.textColor}">${userInput.text}</text>`;
    // NOTES: Replace closing tag to include text inside svg tag
    const svg = svgShape.replace('</svg>', `${svgText}</svg>`);
    // NOTES: Write svg to file
    fs.writeFileSync('../examples/logo.svg', svg);
    // NOTES: Return svg
    return svg;
  }
}

