// Ключевые слова let и const

let name = 'Jhon'; // здесь изменятся значения переменной
name = 'Alex';
console.log(name)

const pi = 3.21 // здесь переменная pi не меняется
//pi = 4.3

// const может изменятся при объекте и массиве
const constName = ['12323','12312333']//значение внутри массиве изменяется
constName.push('22222222')
console.log(constName)

const person =  {//значение внутри объекта можем изменить
    name: 'Joe',
    age: 200
}
person.name = 'Alexander'
console.log(person)

for (var i = 0; i < 3; i++){
    setTimeout(function (){
        console.log(i)
    }, +1000)
} //Результат 333


for (let i = 0; i < 3; i++){
    setTimeout(function (){
        console.log(i)
    }, +1000)
} //Результат 012