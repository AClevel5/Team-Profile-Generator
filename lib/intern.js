const Employee = require("./lib/employee");
// create an intern class to extend employee

class Intern extends Employee {
    constructor(name, id, email, school) {

        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
}