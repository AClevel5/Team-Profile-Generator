const Employee = require("./lib/Employee");
// Create an Engineer Class to extend to employee

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {

        super(name, id, email);
        this.gitHub = gitHub;
    }
    getGithub() {
        return this.gitHub;
    }
}