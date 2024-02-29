// Polymorphism 

class Animal {
    makeSound() {
        return 'The anminal makes a noise.'
    }
}

class Dog extends Animal {
    makeSound() {
        return super.makeSound() + 'I heard a dog bark.'
    }
}

const dog = new Dog();
console.log(dog.makeSound());

const cat = new Cat();
console.log(cast.makeSound())