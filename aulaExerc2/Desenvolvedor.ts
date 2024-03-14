import { Funcionario } from "./Funcionario";
export class Desenvolvedor implements Funcionario{
    cargo(): boolean {
        return true;
    }
    salario(): boolean {
        return true;
    }
    
}