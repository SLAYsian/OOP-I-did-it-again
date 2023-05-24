// SECTION: SHAPE CLASS

class Shape {
  constructor(color){
    this.color = color;
  }
  render() {
    throw new Error('Overwritten by child classes');
  }
}

// SECTION: CIRCLE INSTANCE
class Circle extends Shape {
  constructor(color){
    super(color);
  }
  render(){
    return `
    <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="100" style="fill: ${this.color}"/>
    </svg>
    `
  }
}

// SECTION: SQUARE INSTANCE
class Square extends Shape {
  constructor(color){
    super(color);
  }
  render(){
    return `
    <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="0" width="200" height="200" style="fill: ${this.color}"/>
    </svg>
    `
  }
}


// SECTION: TRIANGLE INSTANCE
class Triangle extends Shape {
  constructor(color){
    super(color);
  }
  render(){
    return `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <polygon fill="${this.color}"
            points="100 15, 200 200, 0 200"/>
    </svg>
    `
  }
}

// SECTION: EXPORT
module.exports = { Triangle, Circle, Square }