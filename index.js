// exercise N1

// function GetRectangleArea(width , height){
//     return width * height;
// }

// console.log(GetRectangleArea(10, 15));
// console.log(GetRectangleArea(19, 27));


// exercise N2

// function CelsiusToFahrenheit(celsius){
//         return (celsius * 5/9 ) + 32 ;
// }

// console.log(CelsiusToFahrenheit(200));

// function FahrenheitToCelsius(fahrenheit){
//         return (fahrenheit - 32) * 5/9;
// }

// console.log(FahrenheitToCelsius(214));



//      EXSERCISES

// //1
// let myName = "Goga";
// console.log(myName);


// //2
// const yearOfBirth = 1994;
// console.log(yearOfBirth);


// //3

// function greatherThan10(num){
//     if(num < 10){
//         console.log("less than 10");
//     } if(num == 10){
//         console.log("equal to 10")
//     }else {
//         console.log("bigger than 10");
//     }
// }

// console.log(greatherThan10(9));


// //4
// let number = "10";
// let convert = Number(number);

// console.log(convert + 5);


// Quiz

// 1 - b
// 2 - b
// 3 - c

// QUIZ questions

// 1 - c
// 2 - b
// 3 - c
// 4 - b
// 5 - c

// exercises

// //1 
// function manipulation(hello){
//     hello = 
// }

// // 2
// function prime(num){
//     Boolean(num / num == 1)
// }
// console.log(num(14));

// // 3 

// let array = [1 , 2 , 3 , 4];
// function(array){
//     array(0++);
// }

// console.log(array);

// // 4

// let name = "Alice";
// let age = 24;
// let grades = [85 , 90 , 92];


// FINAL TEST

// 1 - c
// 2 - a
// 3 - e
// 4 - a
// 5 - c







// quiz 
// 1 - b
// 2 - a
// 3 - c

// exercises 

// //1
// let sentence = "Hello World";
// let reversedSentence = sentence.split(" ").reverse().join(" ");
// console.log(reversedSentence); 


// // 2
// function greaterThan10(nums) {
//     return nums.filter(num => num > 10);
// }
// console.log(greaterThan10([1, 6, 20, 31]));

// // 3

// let numbers = [1, 2, 3];
// let squaredNumbers = numbers.map(num => num * num);
// console.log(squaredNumbers);



// easy lvl 
// 1 exercise

// function squaredNumbers(square){
//     return square * square;
// }

// console.log(squaredNumbers(25));

// // 2 exercise

// function bigNum(arr){
//     return arr.filter(num => num > 50);
// }

// console.log(bigNum([50, 100, 30, 60, 10, 1]));

// function doubleNum(a){
//     return a / (1.5 * a);
// }

// console.log(doubleNum(9));

// function filterNums(Nums){
//     return Nums.filter(num => num < 7);
// }

// console.log(filterNums([1, 2, 3, 5, 4, 6, 7, 8, 9, 10]));

// medium level
// 1


// let word = "bukake";
// let string = word.split("").reverse().join("");



// console.log(string);

// 2 

// function countLetter(word, targetLetter){
//     return word.split("").filter(letter => letter === targetLetter).length;
// }


// console.log(countLetter("lanwdonoinflainldawnodianmwodnaeofbaodma;lNOCzdsklhbcouysdabhpOINd;af", "a"));

// function outerFunction() {
//     let message = "Hello from closure!";
//     function innerFunction() {
//         return message;
//     }
//     return innerFunction;
// }

// const inner = outerFunction();
// console.log(inner());


// function createCounter() {
//     let count = 0;
//     function innerFunction() {
//         count++;
//         return count;
//     }
//     return innerFunction;
// }

// const counter = createCounter();
// console.log(counter()); 
// console.log(counter()); 
// console.log(counter()); 

// function createBankAccount(initialBalance){
//     let balance = initialBalance;
    
// }

// const accaunt = createBankAccount(100);
// account.deposit(50);
// accaunt.withdraw(70);
// // console.log(account.getBalance());
// // console.log(account.balance);

// function deepClosure() {
//     let level1 = 1;

//     function level2() {
//         let level2 = 2;
//         let sum1 = level2 + level1;

//         function level3() {
//             let level3 = 3;
//             let sum2 = level3 + sum1;
//             function level4() {
//                 let level4 = 4;
//                 let sum3 = level4 + sum2;
//                 function level5() {
//                     let level5 = 5;
//                     return sum3 + level5;
//                 }
                
//                 return level5();
//             }

//             return level4();
//         }

//         return level3();
//     }

//     return level2();
// }

// const deepFunc = deepClosure();
// console.log(deepFunc);

// ვერი ჰარდი

// function memoizedFactorial(n) {
    
//     function innerFactorial(){
//         return n * (n - 1);
//     }
// }

// const factorial = memoizedFactorial();
// console.log(factorial(5));
// console.log(factorial(6)); 


// console.log(!!!!!5);

// function factorial(n){
    
//     for(let i = n; n > 0; i--){
//         return n *= (n - 1);
//     }
// }
// console.log(factorial(5));

// function factorial(n) {
//     if (n === 0 || n === 1) {
//       return 1;
//     }
  
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//       result = result * i;
//     }
//     return result;
//   }
  
//   console.log(factorial(9));

// function arrayToString(arr){
//     return arr.join(" ");
// }

// function weather(temperature){
//     return `It,s ${temperature > 25? "hot" : temperature >15 ? "warm" : "cold"}`;
// }

// console.log(weather(30));

// function grades(scores1){
//     return `
//     ${scores1 > 90 ? 'A'
//     : scores1 > 80 ? 'B'
//     : scores1 > 70 ? 'c'
//     : 'fail'}`;
// }
// console.log(grades(85));

//Statement

const animal = "cat";

switch(animal){
    case 'dog':
        console.log("woof");
        break;
    case 'cat':
        console.log("meow");
        break;
    case 'cow':
        console.log("moo");
        break;
    default:
        console.log("unknown animal");
        break;

}
console.log(animal('dog'));