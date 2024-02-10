//  Primitives: number, string, boolean
//  More complex types: arrays, objects
//  Funciton types, parameters

//  Primitives
let age: number;
age = 12;

let userName: string;
userName = "Andrea";

let isInstructor: boolean;
isInstructor = true;

//  More complex types

let hobbies: string[];
hobbies = ["Sports", "Cooking"];

// Type Aliases
type Person = {
    name: string,
    age: number
}

let person: Person;
person = {
    name: "Max",
    age: 32
};

let people: Person[];

// Type inference
let course = "TypeScript guide";
// course = 1234;     anche se non specifichiamo il tipo, TypeScript lo fa per noi

// Union type

let courseUnion: string | number | boolean = "TypeScript guide";
courseUnion = 1234;

//  Functions & types

function add(a: number, b: number) {
    return a + b;
}

// Type inference: void
function print(value: any) {
    console.log(value);
}

//  Generics

function insertAtBeginning<T>(array: T[], value: T) {
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
    constructor(
        public firstName: string,
        public lastName: string,
        public age: number,
        private courses: string[]) {}

    // senza la keyword function perchè siamo in una classe ed è un metodo della classe
    enrol(courseName: string) {
        this.courses.push(courseName);
    }

    listCourses() {
        this.courses.slice()
    }
}

const student = new Student("Max", "Schwarz", 32, ["Angular"]);
student.enrol("TypeScript")
student.listCourses()

// Interfaces (only in TypeScript)

// Usate per definire oggetti di un determinato tipo, sono simili alle classi ma non creano istanze dirette, ma vengono usate solo per
// il tipo, i metodo non hanno implementazione ma sono la dichiarazione.
// Sono molto simili al type aliases, fanno la stessa cosa, l'unica differenza è che le interfacce possono essere implementate nelle classi,
// questo forza le classi ad utilizzare la struttura definita in esse
interface Human {
    firstName: string;
    age: number;
    greet: () => void;
}

let max: Human;
max = {
    firstName: "Max",
    age: 32,
    greet() {
        console.log("Hello")
    }
}

class Instructor implements Human {
    firstName!: string;     // c'è il ! perchè sto usando typescript strict
    age!: number;     // c'è il ! perchè sto usando typescript strict
    greet() {
        console.log("Hello");
    }
}