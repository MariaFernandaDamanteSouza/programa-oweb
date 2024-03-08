"use strict";
// // Exercicio 1
// function maiorValor(...lista : number[]):number {
//     let maior : number = 0;
//     for(let i = 0; i < lista.length; i++) {
//         if(lista[i] > maior) {
//             maior = lista[i];
//         }
//     }
//     return maior;
// }
// console.log(maiorValor(10,5,25,35,68,16));
// // Exercicio 2
// function ehPar(numero:number) : boolean {
//     if(numero % 2 == 0)
//         return true;
//     return false;
// }
// if(ehPar(10))
//     console.log("É par");
// // Exercico 3
// function calculaMedia(...medias:number[]):number {
//     let soma : number = 0;
//     for(let i = 0; i < medias.length; i++) {
//         soma += medias[i];
//     }
//     let media : number = soma / medias.length;
//     return media;
// }
// console.log(calculaMedia(5,6,8,9,10).toFixed(2));
// console.log(calculaMedia(5,4,9,10,2,6).toFixed(2));
// console.log(calculaMedia(5,6,8,9,10,8).toFixed(2));
// console.log(calculaMedia(5,6,3,1,10,10,8).toFixed(2));
// console.log(calculaMedia(5,6,8,9,4,10).toFixed(2));
// console.log(calculaMedia(5,6,1,2,5,6,8,9,10).toFixed(2));
// Exercicio 4
// function stringMaiuscula(n:string):string {
//     return n.toUpperCase();
// }
// console.log(stringMaiuscula('marcus'));
// console.log(stringMaiuscula('programação web'));
// console.log(stringMaiuscula('analise de desenvolvimento de sistemas'));
// //Exercicio 5
// function ehPrimo(n:number):boolean {
//     let contador : number = 0;
//     if(n > 1) {
//         for(let i = 1; i <= n; i++) {
//             if(n % i == 0) {
//                 contador++;
//             }
//         }
//         if(contador > 2) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(ehPrimo(3));
// console.log(ehPrimo(6));
// // Exercicio 6
// function inverteArray(...lista:any):any {   
//     let novaLista:any[] = [];
//     for(let i = lista.length - 1; i >= 0; i--) {
//         novaLista.push(lista[i]);
//     }
//     return novaLista;
// }
// console.log(inverteArray(1,2,3,4,5));
// // Exercicio 7
// function valorAcrescido(valor : number, porcentagem : number) : number {
//     return valor * (1 + (porcentagem / 100));
// }
// console.log(valorAcrescido(10,50));
// // Exercicio 8
// function reverteString(texto:string): string {
//     let separa:string[] = texto.split("");
//     let junta:string = separa.reverse().join("");
//     return junta;
//   }
//   console.log(reverteString('marcus'));
// // Exercicio 9
// function somaPar(...pares:number[]):number {
//     let soma:number = 0;
//     for(let i = 0; i < pares.length; i++) {
//         if(pares[i] % 2 == 0) {
//             soma += pares[i];
//         }
//     }
//     return soma;
// }
// console.log(somaPar(1,2,6,3,8,10));
// // Exercico 10
// function fatorial(n:number):number {
//     let fatorial:number = 1;
//     for(let i = 0; i < n; i++ ) {
//         fatorial *= (n-i);
//     }
//     return fatorial;
// }
// console.log(fatorial(5));
// console.log(fatorial(4));
// console.log(fatorial(6));
// console.log(fatorial(10));
