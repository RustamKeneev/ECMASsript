//Class Properties
class Counter {
    count = 0;
    increment = () => {
        this.count ++;
        console.log(this.count)
    }
}

const counter = new Counter()
console.log(counter.count);
counter.increment();
setTimeout(counter.increment, 10000);

class CounterTwo {
    count = 0;
    increment = () => {
        this.count += CounterTwo.incrementStep;
        console.log(this.count)
    }
    static incrementStep = 2;
}
const counterTwo = new CounterTwo()
console.log(counterTwo.count);
counter.increment();
setTimeout(counterTwo.increment, 10000);

class CounterThree {
    count = 0;
    increment = () => {
        this.count += CounterThree.incrementStep;
        console.log(this.count)
    }
    static incrementStep = 2;
    static incrementAll = function (array){
        array.forEach((countes) => countes.increment())
    }
}
CounterThree.incrementAll([])

class CounterFour {
    constructor() {
        this.count = 0;
        this.increment = () => {
            this.count += CounterFour.incrementStep;
            console.log(this.count)
        }
    }
}

CounterFour.incrementStep = 2;
CounterFour.incrementAll = function (array){
    array.forEach((countes) => countes.increment())
}