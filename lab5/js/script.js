function Person(name, surname, kilo, boy) {
    this.name = name;
    this.surname = surname;
    this.kilo = kilo;
    this.boy = boy;
    this.fulname = function () {
        return this.name + " " + this.surname;
    }
    this.kitleIndeksi = function () {
        return this.kilo / Math.pow(this.boy, 2);
    }
    this.netice = function () {
        if (this.kitleIndeksi() < 20)
            return "Cekiniz normadan azdir!";
        else if (this.kitleIndeksi() < 25)
            return "Cekiniz normaldir!";
        else if (this.kitleIndeksi() < 30)
            return "Cekiniz normadan yuxaridir!";
        else (this.kitleIndeksi() > 30)
        return "Siz obezsiniz!";
    }
}


var person1 = new Person("Ulker", "Aliyeva", 60, 1.69);
var person2 = new Person("Sabina", "Quseinova", 53, 1.62);
var person3 = new Person("Gunay", "Hewimova", 90, 1.47);
var person4 = new Person("Suleyman", "Suleymanli", 70, 1.80);

console.log(person1.fulname() + " " + person1.kitleIndeksi() + " " + person1.netice());
console.log(person2.fulname() + " " + person2.kitleIndeksi() + " " + person2.netice());
console.log(person3.fulname() + " " + person3.kitleIndeksi() + " " + person3.netice());
console.log(person4.fulname() + " " + person4.kitleIndeksi() + " " + person4.netice());

function Cars(marka, model, reng, bakHecmi, zatrataBenzinNa100km) {
    this.model = model;
    this.marka = marka;
    this.reng = reng;
    this.bakHecmi = bakHecmi;
    this.zatrataBenzinNa100km = zatrataBenzinNa100km;
    this.fulBaklaGedeceyiYol = function () {
        return (this.bakHecmi / this.zatrataBenzinNa100km) * 100;
    }
}
var car1 = new Cars("BMW", "X1", "Qara", 70, 5);
console.log(car1.marka + " " + car1.model + " " + car1.fulBaklaGedeceyiYol());


function Dog(name, ay) {
    this.name = name;
    this.ay = ay;
    this.age = function () {
        return (ay * 6) / 12;
    }
}
var dog1 = new Dog("zek", 4)
console.log(dog1.name + " " + dog1.age());



