"use strict";
//  Primitives: number, string, boolean
//  More complex types: arrays, objects
//  Funciton types, parameters
//  Primitives
let age;
age = 12;
let userName;
userName = "Andrea";
let isInstructor;
isInstructor = true;
//  More complex types
let hobbies;
hobbies = ["Sports", "Cooking"];
let person;
person = {
    name: "Max",
    age: 32
};
let people;
// Type inference
let course = "TypeScript guide";
// course = 1234;     anche se non specifichiamo il tipo, TypeScript lo fa per noi
// Union type
let courseUnion = "TypeScript guide";
courseUnion = 1234;
//  Functions & types
function add(a, b) {
    return a + b;
}
// Type inference: void
function print(value) {
    console.log(value);
}
//  Generics
function insertAtBeginning(array, value) {
    const newArray = [value, ...array];
    return newArray;
}
const numberArray = [1, 2, 3];
// riesce a capire che tipo stiamo elaborando tramite T generics, in questo caso capisce che è number è fa un type inference
const updatedNumberArray = insertAtBeginning(numberArray, -1);
const stringArray = ["abc", "def"];
// riesce a capire che tipo stiamo elaborando tramite T generics, in questo caso capisce che è string è fa un type inference
const updatedStringArray = insertAtBeginning(stringArray, "ghi");
// Classes in TypeScript
class Student {
    // con TypeScript è possibile snellire il codice definendo e assegnando le proprietà di una classe direttamente nei parametri
    // del costruttore, senza dover prima definirle fuori e poi assegnarle dentro il costruttore
    constructor(firstName, lastName, age, courses) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.courses = courses;
    }
    // senza la keyword function perchè siamo in una classe ed è un metodo della classe
    enrol(courseName) {
        this.courses.push(courseName);
    }
    listCourses() {
        this.courses.slice();
    }
}
const student = new Student("Max", "Schwarz", 32, ["Angular"]);
student.enrol("TypeScript");
student.listCourses();
let max;
max = {
    firstName: "Max",
    age: 32,
    greet() {
        console.log("Hello");
    }
};
class Instructor {
    greet() {
        console.log("Hello");
    }
}
