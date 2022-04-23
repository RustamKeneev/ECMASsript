//Classes

class Animal{
    constructor(name, voice) {
        this.name = name;
        this.voice = voice;
    }
    say(){
        console.log(this.name, 'goes', this.voice);
    }
}

class Birds extends Animal{
    constructor(name, voice, canFly) {
        super(name,voice);
        super.say();//этот метод say вызвана для разницы работы
        this.say();//этот метод say вызвана для разницы работы
        this.cantFly = canFly;
    }
}


const duck = new Birds('Duck','quack', true)
duck.say();