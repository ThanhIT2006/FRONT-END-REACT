class Anime {
    name;
    constructor(name) {
        this.name = name;
    }
    printfName() {
        return `Ten dong vat: ${this.name}`;
    }
}
class Dog extends Anime {
    makeNoise() {
        console.log("Gau Gau");
    }
}
class Cat extends Anime {
    makeNoise() {
        console.log("Meo Meo");
    }
}
const dog = new Dog("Dog");
dog.printfName();
dog.makeNoise();
const cat = new Cat("Cat");
cat.printfName();
cat.makeNoise();
export {};
//# sourceMappingURL=BT3.js.map