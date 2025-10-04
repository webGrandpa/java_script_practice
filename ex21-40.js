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

const multiplier = number => { 
    2 * number;
    const createMultiplier = number * 5;
    return createMultiplier;
}

multiplier(2);

