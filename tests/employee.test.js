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