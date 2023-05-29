const { Circle, Square, Triangle } = require('./shapes');

describe('Shapes', () => {
  // SECTION: CIRCLE
  describe('Circle', () => {
    let circle;
    beforeEach(() => {
      circle = new Circle('#B76E79', 'silver');
    });
    // NOTES: Tests for correct color
    it('should include the correct fill color in the circle', () => {
      expect(circle.render()).toContain('fill:#B76E79');
    })
    // NOTES: Tests for correct stroke color
    it('should include the correct stroke color in the SVG', () => {
      expect(circle.render()).toContain('stroke="silver"');
    });  
    // NOTES: Tests for correct svg tag
    it('should create an svg string string that starts with <svg opening tag abd ends with </svg> closing tag', () => {
      const svg = circle.render();
      expect(svg).toMatch(/^<svg/);
      expect(svg).toMatch(/<\/svg>$/);
    })
    // NOTES: Tests for circle element with correct radius
    it('should include a circle element with the a radius of 99 in the SVG', () => {
      expect(circle.render()).toContain('<circle cx="100" cy="100" r="99" style="fill:#B76E79" stroke="silver" stroke-width="1"/>')
    });
  })
  // SECTION: SQUARE
  describe('Square', () => {
    let square;
    beforeEach(() => {
      square = new Square('blue', '#f5e3e0');
    });
    // NOTES: Tests for correct color
    it('should include the correct fill color in the square', () => {
      expect(square.render()).toContain('fill:blue');
    });
    // NOTES: Tests for correct stroke color
    it('should include the correct stroke color in the SVG', () => {
      expect(square.render()).toContain('stroke="#f5e3e0"');
    });  
    // NOTES: Tests for correct svg tag
    it('should create an svg string string that starts with <svg opening tag abd ends with </svg> closing tag', () => {
      const svg = square.render();
      expect(svg).toMatch(/^<svg/);
      expect(svg).toMatch(/<\/svg>$/);
    });
    // NOTES: Tests for the square element with correct height and width
    it('should include a square element with a height and width of 198px', () => {
        expect(square.render()).toContain('<rect x="0" y="0" width="198" height="198" style="fill:blue" stroke="#f5e3e0" stroke-width="1"/>')
    })
  }) 
  describe('Triangle', () => {
    let triangle;
    beforeEach(() => {
      triangle = new Triangle('#9d6381', 'black');
    });
    // NOTES: Tests for correct color
    it('should include the correct fill color in the triangle', () => {
      expect(triangle.render()).toContain('fill:#9d6381');
    });
    // NOTES: Tests for correct stroke color
    it('should include the correct stroke color in the SVG', () => {
      expect(triangle.render()).toContain('stroke="black"');
    });  
    // NOTES: Tests for correct svg tag
    it('should create an svg string string that starts with <svg opening tag abd ends with </svg> closing tag', () => {
      const svg = triangle.render();
      expect(svg).toMatch(/^<svg/);
      expect(svg).toMatch(/<\/svg>$/);
    })
    // NOTES: Tests for the triangle element with correct points
    it('should include a polygon with the correct points', () => {
      expect(triangle.render()).toContain('<polygon points="100 15, 198 198, 0 198" style="fill:#9d6381" stroke="black" stroke-width="1"/>')
    });
  })
});