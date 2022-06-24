// let amount = 30;
// let cookiePrice = 7;
// let candyPrice = 8;
// let rest = amount - cookiePrice;
//
//
// if(rest >= candyPrice){
// document.write('i have enough money')
// }else{
// document.write('i don`t have enough money')
// }
//
// document.write("Now less print to the")

//
// let amounts = 3;
// let cookiePrices = 7;
// let candyPrices = 8;
// let total = amounts - cookiePrices;
// let hasEnoughMoney = total >= candyPrices;
//
// if (hasEnoughMoney) {
//   console.log("i have enough money");
// } else {
//   console.log("i don`t have enough money");
// }
//
// console.log("--------------------");
// now less practice numbers and remainders
//
// const x = 10;
//
// let result = 11 % 5;
//
// console.log(result);
// console.log("--------------------");
//
// less find the area of a rectangle
//
// const y = 5;
//
// let a = 11;
// let b = 4;
//
// let area = a * b;
// let cul = (a + 2) * (b - 1);
// let division = a / b;
//
// console.log(area);
// console.log(cul);
// console.log(division);
// console.log("--------------------");
// strings
//
// const myName = "lucky";
//
// let myAge = 29;
// myAge = myAge + 1;
// console.log("my age is", myAge); //alt
//
// const message = myName + " is " + myAge; //Concatenation
//
// const message2 = `${myName} is ${myAge - 3}`; //Interpolation method
// console.log(message);
//
// console.log(message2);
// console.log("--------------------");
// Concatenation
//
// const j = "Con";
// const f = "enation";
// const k = "cat";
//
// const resultString = j + k + f;
//
// console.log(resultString);
// console.log("--------------------");
//
// Interpolation method
//
// const h = "Hello";
// const R = "world";
//
// const resultString2 = `${h}, ${R}`;
//
// console.log(resultString2);
// console.log("--------------------");
// booleans
//
// const Age = 20;
// const hasAccess = Age > 18;
//
// const Ages = 18;
// const Access = !(Ages === 18);
//
// console.log("Access", Access);
// console.log("hasAccess", hasAccess);
//
// if (hasAccess || Access) {
//   console.log("Access granted");
// } else {
//   console.log("Access denied");
// }
// console.log("--------------------");
// basic Functions
//
// ---Rectangle 5 x 8
//
// const w = 5;
// const l = 8;
//
// const perimeter = w * 2 + l * 2;
// const area2 = w * l;
//
// console.log("Rectangle", w, "x", l);
// console.log("Perimeter is", perimeter);
// console.log("Area is", area2);
// console.log("--------------------");
//
// ---Rectangle 4 x 7
//
// const W = 4;
// const L = 7;
//
// const perimeters = w * 2 + l * 2;
// const areas2 = W * L;
//
// console.log("Rectangle", W, "x", L);
// console.log("Perimeter is", perimeters);
// console.log("Area is", areas2);
// console.log("--------------------");
//
// To avoid writing the long code above we can just write a function that we can reuse like this:
//
// const getRectangle = (w, l) => {
//   const perimeter = w * 2 + l * 2;
//   const area2 = w * l;
//
//   console.log("Rectangle", w, "x", l);
//   console.log("Perimeter is", perimeter);
//   console.log("Area is", area2);
//   console.log("--------------------");
// };
//
// ---Rectangle 8 x 12
//
// getRectangle(8, 12);
//
// ---Rectangle 5 x 9
//
// getRectangle(5, 9);
//
//   Conditional operators
// if statement
//
// const o = 8;
//
// if we want to print o on the console on a statement of o is less or equals to 10
//
// if (o <= 10) {
//   console.log("man");
//   console.log("--------------------");
// }
//
// else if statement
//
// const years = 14;
//
// if we want to print years on the console with more than 1 statement or Condition
//
// if (years >= 10) {
//   console.log("child");
//   console.log("--------------------");
// } else if (years >= 18) {
//   console.log("adult");
// } else if (years <= 4) {
//   console.log(baby);
// }
// else if statement with the return statement
//
// const shortTermCost = 50; // days 1 -3
// const weekCost = 40; // days 4 -7
// const longTermCost = 30; // days 8 - ..
//
// console.log(
//   getRentalPrice(2), // 2* 50 = 100
//   getRentalPrice(5), // 3 * 50 + 2 * 40 =230
//   getRentalPrice(10) // 3 * 50 + 4 * 40 + 3 * 30 = 400
// );
// console.log("--------------------");
//
// function getRentalPrice(numberOfDays) {
//   if (numberOfDays <= 3) {
// return numberOfDays * 50;
//   }
//   let daysLeft = numberOfDays - 3;
//
//   if (daysLeft <= 4) {
// return 3 * 50 + daysLeft * 40;
//   }
//   daysLeft = numberOfDays - 7;
//   return 3 * 50 + 4 * 40 + daysLeft * 30;
// }
//
// conditional operator or Ternary operator
// instate of using an if else statement we can use this Ternary operator like this:
// let values = 40;
// let messages = values > 18 ? "we got it" : "we lost it";
//
// console.log(messages);
// console.log("--------------------");
//
// for loop
//
// increment numbers by 2 option 1
//
//  for(let numbers = 0;numbers < 5; numbers += 2){
//   console.log("my best number is", numbers)
// }
// console.log("--------------------");
//
//
// increment numbers by 1 option 2
//
// for(let numbers = 0;numbers < 5; numbers ++){
// console.log("my best numbers is", numbers)
//   }
//   console.log("--------------------");
//
//
//   const m = 5;
// const n = 9;
// for (let i = m; i < n; i++) {
//   console.log(i);
// }
// console.log("--------------------");
//
// let totals = 0;
// for (let i = 1; i <= 3; i++) {
//   totals += i;
// }
// console.log(totals);
// console.log("--------------------");
//
//  while loop
//
// let number = 21;
// let counters = 0;
//
// while(number % 2 === 0){
// number /= 2;
//
// console.log(number);
// counters++;
// }
//
// console.log("me",counters);
//
// do while loop
//
// let num= 21;
// let count = 0;
//
// do{
// num /= 2;
//
// console.log(num);
// count++;
// }while(num % 2 === 0)
//
// console.log("me",count);
//

const { ListGroup } = require("reactstrap");

// const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
// 
// let canDrink = [];
// 
// for(let i = 0; i < ages.length; i++){
    // if(ages[i] >= 21)
    // canDrink.push(ages[i])
// }
// 
// const combinedArray = canDrink
//   .map((age) => age * 2)
//   .filter((age) => age >= 40)
//   .sort((a, b) => a - b)
//   .reduce((a, b) => a + b, 0);
//  
// console.log(combinedArray);

// 
// const companies= [
    // {name: "Company One", category: "Finance", start: 1981, end: 2004},
    // {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    // {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    // {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    // {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    // {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    // {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    // {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    // {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
//   ];
  

//   const companyNames = companies.filter(company => company.category === 'Retail');
     

//   companies.forEach(company => {
    //   
    //   console.log(company.start)
//   });



// let Array1 = [5,7,9,2,6];
// let Array2 = [1,4,8,0,3];
// let oddArr = [];
// let evenArr = [];
// 
// 
// 
// 
// const combinedArray = Array1.concat(Array2).sort((a, b) => b - a);
// 
// for(let i = 0; i < combinedArray.length; i++){
    // 
// 
    // if(combinedArray[i] % 2 === 1){
        // oddArr.push(combinedArray[i]);
    // }
// 
    // if(combinedArray[i] % 2 === 0){
        // evenArr.push(combinedArray[i]);
    // }
// }
// 
// let sumOdd = oddArr.reduce((a, b) => a + b, 0);
// 
// let sumEven = evenArr.reduce((a, b) => a + b, 0);
// 
// 
// let total = oddArr.concat(evenArr).reduce((a, b) => a + b, 0);
// 
// 
// 
// 
// 
// console.log(sumOdd)
// console.log("--------------------");
// console.log(sumEven)
// console.log("--------------------");
// console.log(total)

         //alt methods   

// let Array1 = [5,7,9,2,6];
// let Array2 = [1,4,8,0,3];
// 
// 
// const combinedSortedArray = (a , b) =>{
// let newArray = a.concat(b).sort((a , b) => b - a)
// let oddNum = newArray.filter((a) => a % 2)
// let evenNum = newArray.filter((a) => a % 2 == 0)
// 
// let tot = oddNum.reduce((a, b) => a + b)
// let tots = evenNum.reduce((a, b) => a + b);
// 
// let sumTot = tots + tot;
// 
// console.log('tot', sumTot)
// }
// 
// combinedSortedArray(Array1 , Array2)
// 
// 
let list = [{name:"Thabo" , mark : 40} , {name:"smith" , mark : 33} , {name:"Nean" , mark : 22}];
let pass = 60;

const getAverage = (list,pass) =>{
    
    let marks = list.map((item) => item.mark);
    let total= marks.reduce((a, b) => a + b, 0);
    let average = total / pass * 100;

console.log("The average is :" ,average);
}

getAverage(list,pass)


// given a string numbers and letters calculate total  '435443434234234234'
let string = '4T354B3434234234234'
let string2 = '4T354B343423423423HL90SO6784'

getTotalString = (string) =>{

let newString = string.split("");
let numbers = newString.filter(v => parseInt(v)).reduce((a, b) => parseInt(a) + parseInt(b));

console.log("hi",numbers);
}

getTotalString(string2);





// given a list of items return numbers

let phrase =['5' , 'g' , 3 , 5 , 10 , 'dfdfdf']
let phrase2 =[ 'g' , 3 , 5 , 10 , 'dfdfdf']


const returnNumbers = (phrase) => {

let num = phrase.filter(function(element) {
    return !isNaN(element)
})

let numbers = num.map(function(val) {
    return parseFloat(val)
})
console.log("-------------------")
    console.log(numbers)
}

returnNumbers(phrase);


//given a list of users your function should be able to edit a user name

let info = [{name:"Thabo" , mark : 40} , {name:"smith" , mark : 33} , {name:"Nean" , mark : 22}];
const position = 2;
const change = "feydo";

const editName = (info,position,change) =>{
    
for(i = 0; i < info.length; i++){

    if(info[i].name.includes(info[position].name)){
        info[position].name = change
     console.log("me",info[position].name)
    }
}
console.log("newArray",info)
} 
editName(info,position,change)



// Asynchronous javascript

//****************callbacks*****************

//setTimeout

// setTimeout(() => {
// 
    // console.log('waited 1 second')
// 
// },1000);
// 

//nested setTimeouts

// setTimeout(() => {
    // console.log('waited 3 second')
    // setTimeout(() => {
        // console.log('waited 2 second')
        // setTimeout(() => {
            // console.log('waited 1 second')
        // },1000);
    // },1000);
// },1000);
// 
//button event handler in browser javascript
// const btn = A;
// btn.addEventListener('click', () => {
//    this is one of the common method
// })



//error first callback
fs.readFile('./text.txt', {encoding:'utf-8'}, (err, data) => {
if(err){
    console.log('Error');
    console.log(err)
}else {
    console.log('GOT DATA')
    console.log(data)
}
})

//**************promises************** 

//Create a promise

const myPromise = new Promise((resolve, reject)  => {
     const rand = Math.floor(Math.random() * 2);
     if(rand === 0){
        resolve();
     }else{
        reject();
     }
});

myPromise
 .then(() => console.log('Success'))
.catch(() =>console.log('Something went wrong'));

//fs readFile with promises

fs.promises
    .readFile('./text.txt', {encoding: 'utf-8'})
    .then((data) => console.log(data))
    .catch((err) => console.error(err));

//fetch with promises
fetch('https://twitch.tv/jamesqquick')
 .then((res) => res.json())
 .then((data) => console.log(data))
 .catch((err) => console.error(err));

 //***************Async/Await*****************

 //load file with async/await

 const loadFile = async () => {

    try{
        const data = await fs.promises.readFile('./text.txt', {
            encoding: 'utf-8',

        });
    } catch(error) {
        console.error(error)
    }


 };

 loadFile();

 //fetch a link with async/await without error handling

 const fetchList = async (id) => {
     
     try{
     const res = await fetch(`https://twitch.tv/jamesqquick/${id}`);
     const data = await res.json; 
    console.log(data)
     }catch (error){
        console.error(err);

     }
 };
 fetchList(2);

 //The asynchronous nature of JavaScript to understanding the language. You'll find the use of callbacks, promises, and async/await in code that you write every day as a JavaScript developer.
 