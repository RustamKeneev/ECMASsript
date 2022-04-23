//Objects

const x = 10;
const y = 20;

const point = {
    x:x,
    y: y,
    draw:function (){
        //...
    }
};
console.log(point);

const prefix = '_aaaaaa_';
const data = {
    [prefix + 'name']: 'Bob',
    [prefix + 'age']: 32
};
console.log(data);

//EcmaScript 2015
const pointTwo = {
    x,
    y,
    draw(creat){
        //...
    }
};
console.log(pointTwo)

const defaults = {
    host:'localhost',
    dbName:'blog',
    user:'admin'
};
const opts = {
    user:'Jhon',
    password:'qwerty'
};
const  result = Object.assign({},defaults,opts);
console.log(result);


const person = {
    name:'ALex',
    friends:['Max','Peter','Arnold']
};
const shallowCopy = Object.assign({}, person);
console.log(shallowCopy);


