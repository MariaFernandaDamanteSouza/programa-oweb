import { Funcionario } from "./Funcionario";
export class Gerente implements Funcionario{
    cargo(): boolean {
        return true;
    }
    salario(): boolean {
        return true;
    }
    
}
