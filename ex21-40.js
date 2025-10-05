//exercise 21-23

const createCounter = () => {
    let count = 0;
    const increment = () => console.log(++count);
    return increment;
};

const counterA = createCounter();

counterA();
counterA();


const counterB = createCounter();

counterB();
counterB();

function first (){
    let x = 1;
    function second (){
        let y = 2;
        function third (){
            let z = 3;
            console.log(x, y, z);
        }
        third();
    }
    second();
};

console.log(first());

const createMultiplier = (multiplier) => {
    return function (number) {
        return number * multiplier;
    }
};

// const createMultiplier = (multiplier) => (number) => number * multiplier;

const duble = createMultiplier(2);

console.log(duble(3));

const concatString = (str) => (stri) => str + stri;

const stringing = concatString('algo');

console.log(stringing('rithm'));

//exercise 21-23

const demonstrateThisProblem = () =>{
    const robot = {
        model: "R2-D2",
        greet(){
            console.log(`I am a robot model ${this.model}`);
        }
    }


    const executeCallback = (callback) => callback();

    return executeCallback(robot.greet);
};

demonstrateThisProblem();