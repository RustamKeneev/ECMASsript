//Spread operator for objects
//Оператор Object Spread

const defaults = {
    host:'localhost',
    dbName:'blog',
    user:'admin'
};
const opts = {
    user:'Jhon',
    password:'qwerty'
};

const result = Object.assign({},defaults, opts);
console.log(result);

const port = 8080;
const resultTwo = {
    ...defaults,
    ...opts,
    port,
    connect(){
         //...
    }
}
console.log(resultTwo);