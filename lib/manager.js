const Employee = require("./Employee");
// create a manager class that extends employee

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {

        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getofficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;