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