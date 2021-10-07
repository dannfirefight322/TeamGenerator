const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Can start a new employee instance", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });

    it("Can set name via arguments", () => {
        const name = "Samantha";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });

    it("Can set id via argument", () => {
        const testValue = 100;
        const e = new Employee("Foo", testValue);
        expect(e.id).toBe(testValue);
    });

    it("Can set email via argument", () => {
        const testValue = "test@email.com";
        const e = new Employee("Foo", 1, testValue);
        expect(e.email).toBe(testValue);
    });

    describe("getName", () => {
        it("Can get name via getName()", () => {
            const testValue = "Samantha";
            const e = new Employee(testValue);
            expect(e.getName()).toBe(testValue);
        });
    });
        
    describe("getId", () => {
        it("Can get id via getId()", () => {
            const testValue = 100;
            const e = new Employee("Foo", testValue);
            expect(e.getId()).toBe(testValue);
        });
    });
        
    describe("getEmail", () => {
        it("Can get email via getEmail()", () => {
            const testValue = "test@email.com";
            const e = new Employee("Foo", 1, testValue);
            expect(e.getEmail()).toBe(testValue);
        });
    });
        
    describe("getRole", () => {
        it("getRole() should return \"Employee\"", () => {
            const testValue = "Employee";
            const e = new Employee("Samantha", 1, "test@email.com");
            expect(e.getRole()).toBe(testValue);
        });
    });    
});