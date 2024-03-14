import { Animal } from "./Animal";
import { Mamifero } from "./Mamifero";
import { Ave } from "./Ave";

function testarAnimal (animal: Animal):void{
    animal.ossos();
    animal.pulmao();
}

let elefante = new Mamifero();
let passaro = new Ave();

testarAnimal(elefante);
testarAnimal(passaro);