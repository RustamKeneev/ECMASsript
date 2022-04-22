// Обычная функция
function square(x) {
    return x * x;
};
square(12)
console.log(square(12))

// Arrow-функции (функции стрелки)
const squareTwo = (x) => x * x;
squareTwo(3)
console.log(squareTwo(3))

//Ecmascript до 2015
const resultOne = array.map(function (element) {
    return parseInt(element);
})
    .filter(function (number) {
    return number%2;
    })
    .reduce(function (max,value){
        return Math.max(max,value);
    })
console.log(resultOne)

const greeter = {
    greet: function (name){
        console.log("Hello", name);
    },
    greeterAll: function (names){
        names.forEach((name) => {
            this.greet(name);
        });
    }
};
greeter.greeterAll(['Alex','Mark','Leo'])


//Ecmascript выщее 2015
const array = ['1', '2', '3', '4']
const resultTwo = array
    .map((elements) => parseInt(elements))//каждый значение проходит и считает в чсилвом варианте
    .filter((num) => num % 2)//после проверки из каждого элемента функция филтрирует которой делиться остаток деление на 2
    .reduce((max, value) => Math.max(max, value), 0)//пробежит оставшимся элементами и этой функции ищем
//максимальное значение, из старых значением вернем новый максимум оставщийся значение
console.log(resultTwo)

