//Object destructuring
//Деструктуризация объектов

const person = {
    firstName:'Peter',
    lastName:'Smith',
    age:25
};

// До Ecmascript 2015 Деструктуризация объектов
const  firstNameOne = person.firstName;
console.log(firstNameOne)
const lastNameOne = person.lastName;
console.log(lastNameOne)

//После 2015 Деструктуризация объектов
const {firstName,lastName} = person;
console.log(firstName,lastName)

const personTwo = {
    name:{
        fist:'Alex',
        second:'Peters'
    },
    age: 30
}

const {name:{first, second}} = personTwo;
console.log(first,second)

const {name:{first:firstName, second:secondName}} = personTwo;
console.log(firstName, secondName)

const {permission:{role = 'user'} = {}} = person;
console.log(role)