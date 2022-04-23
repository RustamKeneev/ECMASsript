//Array destructuring
//Деструктуризация массивов

const find  = [1,2,3,4,5,5,6,7,7,8];
const [a,b,c] = find;
console.log(a,b,c);

const [,d,,,e] = find;// символом запятой (,) пропускает
console.log(d,e);

const line = [[1,2,3],[4,5]];
const [[pointOneX,pointOneY],[pointTwoX,pointTwoY]] = line;
console.log(pointOneX,pointOneY, pointTwoX,pointTwoY);

const people = ['Alex','Philip'];
const [a1,b1,c1 = 'Jhon'] = people;
console.log(a1,b1,c1)

const [a,...others] = people
console.log(others)

const dict = {
    duck:'quack',
    dog:'wuff',
    mouse:'squeak',
    hamster:'squeak'
};
const result = Object.entries(dict);
console.log(result)
const resultTwo = Object.entries(dict)
    .filter((array)=> array[1] === 'squeak');
console.log(resultTwo);

const resultThree = Object.entries(dict)
    .filter(([key, value])=> value === 'squeak');
console.log(resultThree);

const resultFour = Object.entries(dict)
    .filter(([, value])=> value === 'squeak');
console.log(resultFour);

const resultFive = Object.entries(dict)
    .filter(([, value])=> value === 'squeak')
    .map(([key])=> key);
console.log(resultFive);


const shape = {
    type:'segment',
    coordinates:{
        start: [10,20],
        end: [22,45]
    }
};

const {coordinates:{start:[startX,startY], end:[endX,endY]}} = shape;
console.log(startX,startY, endX, endY);





