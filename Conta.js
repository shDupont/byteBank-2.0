export class Conta{
    constructor(cliente, agencia, saldoInicial){
        this._agencia = agencia
        this._cliente = cliente
        this._saldo = saldoInicial
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor
        }
    }

    get cliente(){
        return this._cliente
    }

    get saldo(){
        return this._saldo
    }

    sacar(valor){
        let taxa = 1.0;
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado
            return valorSacado
        }
    }

    depositar(valor){
        if(valor <= 0){
            return
        }
        this._saldo += valor
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }
}