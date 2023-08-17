function generateShapes(data){
    if(data.shape === circle){
    return `
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

 <rect width="100%" height="100%" fill="white" />

 <circle cx="150" cy="100" r="80" fill="${data.shapeColor}" />

 <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>

</svg>`
    } else if (data.shapes === square){
        return `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

        <rect width="100%" height="100%" fill="white" />

        <rect x="10" y="10" width="30" height="30" fill = "${data.shapeColor}"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>

        </svg>`

    } else
        return `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

        <rect width="100%" height="100%" fill="white" />

        <rect x="10" y="10" width="30" height="30" fill = "${data.shapeColor}/>

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>

        </svg>`


};

module.exports = generateShapes;