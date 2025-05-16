// Unlike C++, static method is called on the class , not the instances .
// Let's see an example .

class cat{
    static counter = 0;  // we can initialize this inside the class. In C++, we used to initialize this outside the class.
    constructor(name)
    {
        this.name = name;
        cat.counter++;
    }
    meow(){
        console.log(`${this.name} says meow!`);
    }
    static counterFunc(){
        console.log(`Hey! there are altogether ${cat.counter} cats saying meow !`)
    }
}
 let oggy = new cat('oggy')
 let jack = new cat ('jack')

 oggy.meow();
 jack.meow();
 cat.counterFunc();