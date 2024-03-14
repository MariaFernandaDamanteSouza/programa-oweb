"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Gerente_1 = require("./Gerente");
const Desenvolvedor_1 = require("./Desenvolvedor");
function implementarFuncionario(funcionario) {
    funcionario.cargo();
    funcionario.salario();
}
let desenvolvedor = new Desenvolvedor_1.Desenvolvedor();
let gerente = new Gerente_1.Gerente();
implementarFuncionario(desenvolvedor);
implementarFuncionario(gerente);
