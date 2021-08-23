import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
    constructor(cliente, agencia, saldoInicial){
       super(cliente, agencia, saldoInicial)
    }

    //Sobrescreve o comportamento de sacar
    sacar(valor){
        const taxa = 1.02;
        return this._sacar(valor, taxa)
    }
}