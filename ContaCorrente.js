import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0
    constructor(cliente, agencia){
        super(cliente, agencia, 0)
        ContaCorrente.numeroDeContas += 1 
    }

    //Sobrescreve o comportamento de sacar
    sacar(valor){
        const taxa = 1.1;
        return this._sacar(valor, taxa)
    }
}