class Shapes {
  constructor() {
    this.color
  }
  setColor(color) {
    this.color = color;
  }
}

class Triangle extends Shapes {
  render() {
    return `<polygon width ="300" height ="200" points="150, 18 250, 162 56, 160" fill="${this.color}" />`;
    
  }
}

class Circle extends Shapes {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

class Square extends Shapes {
  render() {
    return `<rect width ="300" height ="300"  fill="${this.color}" />`;
  }
}

module.exports = { Triangle, Circle, Square };


