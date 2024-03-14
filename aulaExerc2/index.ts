import { Funcionario } from "./Funcionario";
import { Gerente } from "./Gerente";
import { Desenvolvedor } from "./Desenvolvedor";

function implementarFuncionario (funcionario: Funcionario):void {
    funcionario.cargo();
    funcionario.salario();
    
}

let desenvolvedor = new Desenvolvedor();
let gerente = new Gerente();

implementarFuncionario(desenvolvedor);
implementarFuncionario(gerente);