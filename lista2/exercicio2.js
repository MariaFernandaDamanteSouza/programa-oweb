"use strict";
// //1) 
// class Carro {
//     private marca: string;
//     private modelo: string;
//     private ano: number;
//     private cor: string;
//     constructor(marca: string, modelo: string, ano: number, cor: string) {
//       this.marca = marca;
//       this.modelo = modelo;
//       this.ano = ano;
//       this.cor = cor;
//     }get getMarca (): string {
//         return this.getMarca
//   }
//   get getModelo (): string {
//         return this.getModelo
//   }
//   get getAno (): number{
//         return this.getAno;
//   }
//   get getCor (): string{
//         return this.getCor;
//   }
// set setMarca (marca : string){
//     this.marca = marca;
// }
// set setModelo (modelo : string){
//     this.modelo = modelo;
// }
// set setAno (ano: number){
//      this.ano = ano;
// }
// set setCor (cor: string){
//     this.cor = cor;
// }
//     exibirInfo(): void {
//       console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Cor: ${this.cor}`);
//     }
//   }
//   const meuCarro = new Carro("Toyota", "Corolla", 2020, "Prata");
//   meuCarro.exibirInfo();
// //2)
// class Calculadora {
//     private valor1: number;
//     private valor2: number;
//     constructor (valor1: number, valor2: number){
//         this.valor1 = valor1;
//         this.valor2 = valor2;
//     }
//     get getValor1 (): number{
//         return this.valor1;
//     }
//     get getValor2 (): number{
//         return this.valor2;
//     }
//     set setValor1 (valor1 : number){
//         this.valor1 = valor1;
//     }
//     set setValor2 (valor2 : number){
//         this.valor2 = valor2;
//     }
//     somar (): number {
//         return this.valor1+this.valor2;
//     }
//     subtrair (): number {
//         return this.valor1-this.valor2;
//     }
//     multiplicar (): number{
//         return this.valor1*this.valor2;
//     }
//     dividir (): number{
//         return this.valor1/this.valor2;
//     }
//     CalcularPorcentagem (): number{
//         return this.valor1/this.valor2*100;
//     }
// }
// const calculadora: Calculadora = new Calculadora (10,5)
// console.log (calculadora.dividir ())
// console.log (calculadora.multiplicar ())
// console.log (calculadora.subtrair())
// console.log (calculadora.somar ())
// console.log (calculadora.CalcularPorcentagem())
// //3) 
class Produto {
    constructor(nome, preco, quantidadeEmEstoque) {
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }
    calcularValorTotalEmEstoque() {
        return this.preco * this.quantidadeEmEstoque;
    }
    reporEstoque(quantidade) {
        this.quantidadeEmEstoque = this.quantidadeEmEstoque + quantidade;
    }
    vender(quantidade) {
        if (quantidade > this.quantidadeEmEstoque) {
            throw new Error("não há estoque suficiente");
        }
        else {
            this.quantidadeEmEstoque = this.quantidadeEmEstoque - quantidade;
        }
    }
}
const p1 = new Produto("Blusa", 100, 30);
console.log(p1.calcularValorTotalEmEstoque());
p1.reporEstoque(40);
console.log(p1.calcularValorTotalEmEstoque());
p1.vender(60);
console.log(p1.calcularValorTotalEmEstoque());
