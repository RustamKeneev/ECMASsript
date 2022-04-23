//Modules

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

class Graph {
    addNode(){
        console.log('node added');
    }
}

// GraphTwo можно экспортировать но по умолчанию надо задать только одну
export default class GraphTwo {
    addNode(){
        console.log('node added');
    }
}

const PI = 3.1415;

export {
    add, subtract, multiply, divide
}

export default  Graph;//можно экспортировать но по умолчанию надо задать только одну