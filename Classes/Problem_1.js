

/*
The Problem 
Say we want to create the most quintessential example of object-oriented design principles: the Circle class. Imagine we are writing a Circle for a simple Canvas library. Among other things, we might want to know how to do the following: 
Draw a given Circle to a given Canvas. 
Keep track of the total number of Circles ever made. 
Keep track of the radius of a given Circle, and how to enforce invariants on its value. 
Calculate the area of a given Circle. 
*/



 class Circle {
    constructor(radius) {
        this.radius = radius;
        Circle.circlesMade++;
    };

    static draw(circle, canvas) {
        // Canvas drawing code
    };

    static get circlesMade() {
        return !this._count ? 0 : this._count;
    };
    static set circlesMade(val) {
        this._count = val;
    };

    area() {
        return Math.pow(this.radius, 2) * Math.PI;
    };

    get radius() {
        return this._radius;
    };
    set radius(radius) {
        if (!Number.isInteger(radius))
            throw new Error("Circle radius must be an integer.");
        this._radius = radius;
    };
}

let c1 =new Circle(23);
let c2=new Circle(2);

console.log("Area of the circle one object",c1.area());
console.log("Area of the circle two object",c2.area());


console.log("Setting the radius of circle one",c1.radius=10);
console.log("Area after Setting the radius of circle one",c1.area());

console.log("Total number of circles made ",Circle.circlesMade);

