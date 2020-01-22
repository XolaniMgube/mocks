let Person = require("../src/mocks.js");
let person1 = new Person();

describe("Person toString() Test", function() {
    it("calls the getName() function", function() {
        spyOn(person1, "getName");
        person1.getName();
        expect(person1.getName).toHaveBeenCalled();
    })

    it("checks how many time getName() was called", function() {
        spyOn(person1, "getName");
        person1.getName()
        expect(person1.getName).toHaveBeenCalledTimes(1)
    })

    it("checks the arguments getName was called with", function() {
        spyOn(person1, "getName");
        person1.getName("Xolani", 22)
        expect(person1.getName).toHaveBeenCalledWith("Xolani", 22)
    })
})