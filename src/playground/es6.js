class Person {
    constructor(name = "Anonymous", age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi! I'm ${this.name}.`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation = 'Unknown') {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        return `${super.getGreeting()} I'm visiting from ${this.homeLocation}.`;
    }
}

const me = new Traveller('Dinesh Haribabu', 28, 'Chengam');
console.log(me.getGreeting());

const other = new Traveller();
console.log(other.getGreeting());