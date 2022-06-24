// object literal

// const  circle1 = {
    // radius: 1,
    // location: {
        // x:1,
        // y:1
    // },
    // draw: function() {
        // console.log('draw');
    // }
// };

// circle.draw();


// Factories (factory function)

// function createCircle(radius) {
    // return{
        // radius,
        // draw: function(){
            // console.log("draw")
        // }
    // }; 
// }


// const  circle = createCircle(1);
// circle.draw();


// Constructor function

// function Circle(radius){
    // this.radius = radius;
    // this.draw = function(){
        // console.log("draw")
    // }
// } 
// 
// Circle.call({}, 1) alt method of calling our function where the first arg specify the object and
//  the second specify the properties

// const another = new Circle(1);


// value types

// primitives values  the value that is stored in a var is stored into a new var and they are completely independent
    // primitives are copied by their value

// let x = 10;
// let y = x;
// x = 20;
// 
// another example

// let number = 10;
// 
// function increase(number) {
    // number++;
// }

// increase(number);
// console.log(number);
// 
// Reference type this are objects which are copied by their reference 
// Object are copied by their reference

// let A = {value:10};
// let B = A;
// A.value = 20;

// another example

// let obj ={value:10};
// 
// function increase(obj) {
    // obj.value++;
// }
// 
// increase(obj);
// console.log(obj);
// 
//Adding and removing properties

// function Circle(radius){
    // this.radius = radius;
    // this.draw = function(){
        // console.log("draw")
    // }
// } 
// 
// const circle = new Circle(10)

// user.token = 'abcd'

// circle.location={x:1};
// circle['location'] = {y:1};


//removing properties

// delete circle['location']


// Enumerating properties


// function Circle(radius){
    // this.radius = radius;
    // this.draw = function(){
        // console.log("draw")
    // }
// } 
// 
// const circle = new Circle(10)
// 
// for (let key in circle){
    // if(typeof circle[key]  !== 'function')   // we us this for in loop to enumerate all members of the obj
    // console.log(key, circle[key])
// }

// const keys = Object.keys(circle);  // we use this to get all the keys in an obj
// console.log(keys)     

// if('radius' in circle)                 // we use the in operator to check if it exist or in .
// console.log('Circle has a radius')
// 

// Abstraction   hide the details and show the essentials


// function Circle(radius){
    // this.radius = radius;
    // let defaultLocation = {x: 0, y:0};
// 
    // this.draw = function(){
// 
    // computeOptimumLocation(0.1)
    // this.radius
        // console.log("draw")
    // }
    // Object.defineProperty(this, 'defaultLocation', {
        // get: function(){
            // return defaultLocation;
        // },
        // set: function(value){
            // if(!value.x || !value.y)
            // throw new Error('Invalid location');
// 
            // defaultLocation = value
        // }
    // })
// } 
// 
// const circle = new Circle(10);
// circle.defaultLocation = 1;
// circle.draw
// 

function Stopwatch() {
    let startTime, endTime, running, duration = 0;

    this.start = function(){
   if(running)
   throw new Error("stopwatch has already started");

   running = true;

   startTime = new Date();

    };

    this.stop = function() {

        if(!running)
        throw new Error("stopwatch is not started");

        running = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds
    };
    this.reset = function() {
       startTime = null;
       endTime = null;
       running = false;
       duration = 0;
    };

    Object.defineProperty(this, 'duration', {
     get: function(){return duration; }
    });
}