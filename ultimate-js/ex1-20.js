//exercise 1


const createGreeting = (name) => {
    if (typeof name !== "string") {
        return `Please provide a name as a string.`
    } else {
        return `Hello, ${name}!`
    }
}

createGreeting("Gemini");

// with ternary operator, its shorter

// const createGreeting = (name) => {
//   return typeof name === "string" ? `Привет, ${name}!` : "Please provide a name as a string.";
// }

//exercise 2

const sum = (a, b) => {
    return (typeof a === "number" && typeof b === "number") ? a + b : `Please write a number`;
    
}

sum(6, 7);

//exercise 3

const isAdult = age => age >= 18;

isAdult(19);

//exercise 4


const getGrade = score => {
    if (typeof score === "number") {
        if (score <= 100 && score >= 0) {
            if(score >= 90 && score <= 100){
                return "A";
            } else if (score >= 80 && score < 90) {
                return "B";
            } else if (score >= 70 && score < 80) {
                return "C";
            } else if (score >= 60 && score < 70) {
                return "D";
            } else {
                return "F";
            }
        } else {
            return `Score must be between 0 and 100`;
        }
    } else {
        return `Please write a number`;
    }
}

getGrade(78);

// const getGrade = score => {
//     // Guards
//     if (typeof score !== 'number') return 'Please write a number';
//     if (score < 0 || score > 100) return 'Score must be between 0 and 100';

//     // Core Logic (now much flatter)
//     if (score >= 90) return 'A';
//     if (score >= 80) return 'B';
//     if (score >= 70) return 'C';
//     if (score >= 60) return 'D';
//     return 'F';
// };


//exercise 5

const getFirstElement = arr => arr[0];

//exercise 6

const getLastElement = arr => arr[arr.length - 1];

//exercise 7

const addNumberToEnd = (arr, num) => arr.push(num);

//exercise 8

const removeLastItem = arr => arr.pop();

//exercise 9

const removeFirstItem = arr => arr.shift();

//exercise 10

const addToBeginning = (arr, item) => arr.unshift(item);

//exercise 11

const user ={
  name: 'Bob',
  age: 42,
  isAdmin: false
}

const getUserInfo = obj => `"Имя: ${obj.name}, Возраст: ${obj.age}.`

//exercise 12

let profile = { name: 'Leo', role: 'Developer' };

    const updateUserProfile = (user, key, value) => user[key] = value;


//exercise 13

let profile1 = { name: 'Leo', role: 'Developer' };


const hasProperty = (obj, propName) => propName in obj;

hasProperty(profile, 'name');
hasProperty(profile, 'email');


const hasPropertyV3 = (obj, propName) => Object.hasOwn(obj, propName);

//exercise 14

const car = { name: 'Tesla', model: 'Model S', year: 2022 }

/**
    for(let key in obj){
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            console.log(key);
        }
    for(let key in obj){
        console.log(`${key}: ${obj[key]}`);
    }
    for(let key in obj){
        console.log(key);
    }
}

*/
const ogObjectProperties = (obj) => {
    for(let key in obj){
        console.log(`${key}: ${obj[key]}`);
    }
}

ogObjectProperties(car)

//exercise 15

const usersInfo = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' }
];


const getUserNamesWithMap = (users) => {
  return users.map(user => user.name);
};

const userInfoNames = getUserNamesWithMap(usersInfo);

console.log(userInfoNames)


const getUserNames = (users) => {
    let names = []
    for(const user of users){
        names.push(user.name)
    }
    return names;
}

getUserNames(usersInfo);


//exercise 16

const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const doubleNumbers = (numbers) => {
    return numbers.map((num) => num * 2);
}

doubleNumbers(numbersArr);

const doubleNums = numbersArr.map((num) => num * 2);

console.log(doubleNums);

//exercise 17

const userAdult = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 18 },
  { name: 'Diana', age: 32 }
];

const getAdultUsers = users => users.filter((users) => users.age >= 18);

console.log(getAdultUsers(userAdult));


//exercise 18

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 18 }
];

const getAdultUserNames = users => users.filter((user) => user.age >= 18).map((user) => user.name);

console.log(getAdultUserNames(users));

//exercise 19

const numbersArray = [1, 5, 10, 20];

const calculateSum = numbers => numbers.reduce((sum, number) => sum + number, 0);

console.log(calculateSum(numbersArray));

const stringArray = [['grape'], ['apple'], ['orange']];

const pairAllFruits  = fruits => fruits.reduce((fruitArr, fruit) => fruitArr.concat(fruit), []);

console.log(pairAllFruits(stringArray));

const fruitArray = fruits => fruits.reduce((array, fruit) => array.concat(fruit), 1);

console.log(fruitArray(stringArray));

const numberArr1 = [[0, 1], [2, 3], [4, 5]];

const numberArrFunc = numbers => numbers.reduce((float, number) => float.concat(number), []);

console.log(numberArrFunc(numberArr1));

const numberArrFunc1 = numbers => numbers.reduce((float, number) => [...float, ...number], []);

console.log(numberArrFunc1(numberArr1));


const fruitsArr = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const fruitObj = fruits =>
  fruits.reduce((obj, fruit) => {
    obj[fruit] = (obj[fruit] ?? 0) + 1; 
    return obj;
  }, {});

console.log(fruitObj(fruitsArr));

// const products = [
//   { name: 'apple', category: 'fruit' },
//   { name: 'carrot', category: 'vegetable' },
//   { name: 'banana', category: 'fruit' },
//   { name: 'broccoli', category: 'vegetable' }
// ];

// const sortCategory = products =>
//   products.reduce((accumulator, { category, name }) => {
//     if (!accumulator[category]) accumulator[category] = [];
//     accumulator[category].push(name);
//     return accumulator;
//   }, Object.create(null));

// console.log(sortCategory(products));

const numbers = [1, 2, 3];

const mapWithReduce = (arr, callback) => {

}






