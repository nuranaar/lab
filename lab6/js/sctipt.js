function Students(name, surname, frontend, backend, fullstack, fullstackStartDate, fullstackFinishDate) {
    this.name = name;
    this.surname = surname;
    this.frontend = frontend;
    this.backend = backend;
    this.fullstack = fullstack;
    this.fullstackStartDate = fullstackStartDate;
    this.fullstackFinishDate = fullstackFinishDate;
    this.fullname = function () {
        return this.name + " " + this.surname
    }
    this.fullstackTime = function () {
        return (this.fullstackFinishDate.getTime() - this.fullstackStartDate.getTime()) / 1000 / 60 / 60 / 24
    }
    this.zacet = function () {
        if (this.fullstackTime() <= 14) {
            return this.frontend * 0.3 + this.backend * 0.3 + this.fullstack * 0.4
        }
        else if (this.fullstackTime() > 14 && this.fullstackTime() <= 20) {
            return this.frontend * 0.3 + this.backend * 0.3 + (this.fullstack - this.fullstack * 0.1) * 0.4
        }
    }

}

var stud1 = new Students("Ulker", "Aliyeva", 80, 85, 90, new Date(2017, 10, 2), new Date(2017, 10, 22));
var stud2 = new Students("Sabina", "Quseinova", 60, 75, 70, new Date(2017, 9, 2), new Date(2017, 9, 12));
var stud3 = new Students("Gunay", "Hewimova", 70, 90, 90, new Date(2017, 10, 6), new Date(2017, 10, 15));
var stud4 = new Students("Anar", "Selimov", 60, 70, 85, new Date(2017, 9, 2), new Date(2017, 9, 10));
var stud5 = new Students("Vusal", "Aliyev", 40, 50, 60, new Date(2017, 5, 2), new Date(2017, 5, 22));

function netice(point) {
    if (point >= 0 && point <= 100) {
        if (point > 90) {
            return "netice-A"
        }
        else if (point > 80) {
            return "netice-B"
        }
        else if (point > 70) {
            return "netice-C"
        }
        else if (point > 60) {
            return "netice-D"
        }
        else if (point >= 50) {
            return "netice-E"
        }
        else {
            return "netice-imtahandan kecmediz"
        }
    }
    else {
        return "netice duzgun deyil"
    }

}

var StudentsArray = [stud1, stud2, stud3, stud4, stud5];
for (var i = 0; i < StudentsArray.length; i++) {
    console.log(StudentsArray[i].fullname() + ":" + netice(StudentsArray[i].zacet()));
}



