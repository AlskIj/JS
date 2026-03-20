class Cinderella {
    constructor(name,age,footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(name,age,slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}

let cinderellas = [
    new Cinderella('asd1', 19, 37),
    new Cinderella('asd2', 19, 38),
    new Cinderella('asd3', 19, 39),
    new Cinderella('asd4', 19, 40),
    new Cinderella('asd5', 19, 36),
    new Cinderella('asd6', 19, 37),
    new Cinderella('asd7', 19, 38),
    new Cinderella('asd8', 19, 38),
    new Cinderella('asd9', 19, 39),
    new Cinderella('asd10', 19, 36),
]

const prince = new Prince('qwe', 24, 36)

// for (const cinderella of cinderellas) {
//     if (cinderella.footSize === prince.slipper) {
//         prince.wife = cinderella;
//     }
// }

const cinderellaMain = cinderellas.find(cinderella => cinderella.footSize === prince.slipper);
prince.wife = cinderellaMain;

console.log(prince);