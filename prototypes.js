//Prototypes

const dog = {
    name:'Dog',
    voice:'Woof',
    say: function (){
        console.log(this.name, 'goes', this.voice);
    }
};
const cat = {
    name:'Cat',
    voice:'Meow',
    say: function (){
        console.log(this.name, 'goes', this.voice);
    }
};

dog.say();
cat.say();

//-------------------------------------------------

const animal = {
    say: function (){
        console.log(this.name, 'goes', this.voice);
    }
};
const dogOne = {
    name:'Dog',
    voice:'Woof',
};
Object.setPrototypeOf(dogOne,animal);
const catOne = {
    name:'Cat',
    voice:'Meow',
};
Object.setPrototypeOf(catOne,animal);

const dogThree = Object.create(animal);
dogThree.name = 'Doc';
dogThree.voice = 'Woof';
dogThree.say();


function createAnimal(name, voice){
    const result = Object.create(animal);
    result.name = name;
    result.voice = voice;
    return result;
}

const dogFour = createAnimal('Dog','woof');
dogFour.say();
const catTwo = createAnimal('Cat','meow');
catTwo.say();

function CreateAnimalTwo(name, voice){
    this.name = name;
    this.voice = voice;
}

CreateAnimalTwo.prototype.say = function (){
    console.log(this.name, 'goes', this.voice);
}

const dogFive = new CreateAnimalTwo('Dog','woof');
dogFive.say();
const catThree = new CreateAnimalTwo('Cat','meow');
catThree.say();


