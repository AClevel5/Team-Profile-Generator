const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("Should make a new object taking in 3 arguments (Name, Email, & ID) ", () => {
            const employee = new Employee("Alex", 24, "Alex@gmail.com");

            expect(employee.name).toEqual("Alex");
            expect(employee.id).toEqual(24);
            expect(employee.email).toEqual("Alex@gmail.com")
        })
    })
});

describe("getID", () => {
    it("Should return ID", () => {
        const employee = new Employee("Alex", 24, "Alex@gmail.com");
        const id = employee.getId();
        expect(id).toEqual(24);
    });
});

describe("getEmail", () => {
    it("Should return Email", () => {
        const employee = new Employee("Alex", 24, "Alex@gmail.com");
        const email = employee.getEmail();
        expect(email).toEqual("Alex@gmail.com");
    });
});

describe("getRole", () => {
    it("Should return Role", () => {
        const employee = new Employee("Alex", 24, "Alex@gmail.com");
        const role = employee.getRole();
        expect(role).toEqual("Employee");
    });
});

describe("getName", () => {
    it("Should return Name", () => {
        const employee = new Employee("Alex", 24, "Alex@gmail.com");
        const name = employee.getName();
        expect(name).toEqual("Alex");
    });
});