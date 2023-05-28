// SECTION: SHAPE CLASS
// NOTES: Updated to include text color as shape border to visibly distinguish shapes
class Shape {
  constructor(shapeColor, textColor){
    this.shapeColor = shapeColor;
    this.textColor = textColor;
  }
  render() {
    throw new Error('Overwritten by child classes');
  }
}

// SECTION: CIRCLE INSTANCE
class Circle extends Shape {
  constructor(shapeColor, textColor){
    super(shapeColor, textColor);
  }
  render(){
    return `
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="99" style="fill: ${this.shapeColor}" stroke="${this.textColor}" stroke-width="1"/>
    </svg>
    `
  }
}

// SECTION: SQUARE INSTANCE
class Square extends Shape {
  constructor(shapeColor, textColor){
    super(shapeColor, textColor);
  }
  render(){
    return `
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="198" height="198" style="fill: ${this.shapeColor}" stroke="${this.textColor}" stroke-width="1"/>
    </svg>
    `
  }
}


// SECTION: TRIANGLE INSTANCE
class Triangle extends Shape {
  constructor(shapeColor, textColor){
    super(shapeColor, textColor);
  }
  render(){
    return `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <polygon fill="${this.shapeColor}" stroke="${this.textColor}" stroke-width="1"
            points="100 15, 198 198, 0 198"/>
    </svg>
    `
  }
}

// SECTION: EXPORT
module.exports = { Triangle, Circle, Square }