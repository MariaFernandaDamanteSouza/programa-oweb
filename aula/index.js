"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mamifero_1 = require("./Mamifero");
const Ave_1 = require("./Ave");
function testarAnimal(animal) {
    animal.ossos();
    animal.pulmao();
}
let elefante = new Mamifero_1.Mamifero();
let passaro = new Ave_1.Ave();
testarAnimal(elefante);
testarAnimal(passaro);
