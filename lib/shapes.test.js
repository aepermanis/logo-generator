const {triangle, square, circle} = require('./shapes')

describe("shapes", ()=>{
it("triangle", ()=>{
const tri = new triangle("blue", "white", "svg");
console.log(tri.svgGenerator());
expect(tri.svgGenerator()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="white" /><polygon points= "150, 18 244, 182 56, 182"  fill ="blue"/><text x="150" y="125" font-size="40" text-anchor="middle" fill="white">svg</text></svg>`);
});

it("circle", ()=>{
const cir = new circle("green", "white" , "svg" ); 

expect(cir.svgGenerator()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="white" /><circle cx="150" cy="100" r="80" fill="green"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">svg</text></svg>`);
});

it("square", ()=>{
const squ = new square("green", "white", "svg");

expect(squ.svgGenerator()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="white" /><rect x="75" y="25" width="30" height="30" fill = "green"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">svg</text></svg>`);
}); 

});

