//simple class code
//
//
//Parent class
class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating! `;
  }
}

//this contains the cat class
class Cat extends Pet {
  constructor(name, age, livesLeft = 13) {
    //"super" is used to reference the parent class this.name and this.age
    super(name, age);
    this.livesLeft = livesLeft;
  }
  eat() {
    return "MEOWWW!";
  }
}

//the Dog class
class Dog extends Pet {
  bark() {
    return "WOOFF!";
  }
}

//using the new keyword to call the class  saving of the cat class in a variable
const monty = new Cat("Monty", 9);
const joq = new Dog("Joq", 5);
