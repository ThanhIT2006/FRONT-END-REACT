abstract class Anime{
    public name:string;
    constructor(name:string){
        this.name = name;
    }
    abstract makeNoise():void;
    printfName():string{
        return `Ten dong vat: ${this.name}`;
    }
}
class Dog extends Anime{
    makeNoise():void{
        console.log("Gau Gau");
    }
}
class Cat extends Anime{
    makeNoise():void{
        console.log("Meo Meo");
    }
}
const dog = new Dog("Dog");
dog.printfName();
dog.makeNoise();
const cat = new Cat("Cat");
cat.printfName();
cat.makeNoise();