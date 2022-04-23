//Spread operator

const array = [1,2,3,4]
const arrayTwo = [112,22,23,41]

// До Ecmascript 2015
const result = Math.max.apply(Math,array)
console.log(result)

// После Ecmascript 2015
const resultTwo = Math.max(...array)//spread operator извлечет с массива и выдает максимальную значению
console.log(resultTwo)

const resultThree = Math.max(...array, ...resultTwo)//spread operator извлечет с двух массива и выдает максимальную значению
console.log(resultThree)

const shallowCopy = [...array]
console.log(shallowCopy)

const shallowCopyTwo = [...array, ...arrayTwo]//Собирает значение с обоих массивов
console.log(shallowCopyTwo)