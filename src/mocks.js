"use strict"

class Person {

    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    getName = function() {
        return this._name;
    }

    setName = function(name) {
        this._name = name;
        return name;
    }

    getAge = function() {
        return this._age;
    }

    setAge = function(age) {
        this._age = age;
    }

    addBirthday = function() {
        this._age++;
    }

    toString = function() {
        return "My name is " + this.getName() + " and I am " + this.getAge() + " years old.";
    }
} 

    

module.exports = Person


