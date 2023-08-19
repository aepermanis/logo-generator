class Shape{
    constructor(shapeColor, textColor, text){
        this.shapeColor = shapeColor;
        this.textColor = textColor
        this.text = text
    }


};

class triangle extends Shape{
    constructor (shapeColor, textColor, text){
        super(shapeColor,textColor,text)
    };

    svgGenerator(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="white" /><polygon points= "150, 18 244, 182 56, 182"  fill ="${this.shapeColor}"/><text x="150" y="125" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    };
    
};

class square extends Shape{
    constructor (shapeColor, textColor, text){
        super(shapeColor,textColor,text)
    };

    svgGenerator(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="white" /><rect x="75" y="25" width="30" height="30" fill = "${this.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    };
    
};

class circle extends Shape{
    constructor(shapeColor,textColor,text){
        super(shapeColor,textColor, text);
    };

    svgGenerator(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="white" /><circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    };

};
    



module.exports = {
    triangle,
    circle,
    square
};
