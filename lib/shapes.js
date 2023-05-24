class Shapes{
    constructor(){
        this.color
    }
    setColor(){
        this.color
    }
}

class Triangle extends Shapes {
    render() {
    return `<polygon width ="300" height ="200" points="150, 18 244, 182 56, 182" fill="${this.color}" />`
}
};

class Circle extends Shapes {
    constructor(color){
        super(color);
    }
    render() {
          return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }  

};
class Square extends Shapes {
    render() {
    return `<rect width ="300" height ="300"  fill="${this.color}" />`
}
};


module.exports = {Triangle, Circle, Square} ;