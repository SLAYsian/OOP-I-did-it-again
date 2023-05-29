const { Circle, Square, Triangle } = require('./shapes');

describe('Shapes', () => {
  describe('Circle', () => {
    // NOTES: Tests for correct color
    it('should create a circle with the correct color', () => {
      const circle = new Circle('#B76E79');
      expect(circle.render()).toContain('fill:#B76E79');
    })
  })
  describe('Square', () => {
    // NOTES: Tests for correct color
    it('should create a square with the correct color', () => {
      const square = new Square('blue');
      expect(square.render()).toContain('fill:blue');
    })

  }) 
  describe('Triangle', () => {
    // NOTES: Tests for correct color
    it('should create a triangle with the correct color', () => {
    const triangle = new Triangle('#9d6381');
    expect(triangle.render()).toContain('fill:#9d6381');
  })
})
});