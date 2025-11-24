console.log('page 04');
////// Class
class People{
    constructor(man, woman){
        this.man = man;
        this.woman = woman;
    }
}

const newPeople = new People("Pete", "Rebecca");
console.log(newPeople);

////// или с объектом параметров
const s = 2100;
class People02{
    constructor({man, woman, num01, num02}){
        this.man = man;
        this.woman = woman;
        this.num01 = num01;
        this.num02 = num02;
    }

    conc(){
        console.log(s);
        return this.num01 + this.num02;
        

    }
}

const newPeople02 = new People02({man: "Pete", woman: "Rebecca", num01: 1, num02: 2});
console.log(newPeople02);
console.log(newPeople02.conc());