// Não quero que ninguém a chame: new Conta()... 
// Classe abstrata - não pode ser instanciada, só herdada. 
export class Conta{
    constructor(cliente, agencia, saldoInicial){

        if(this.constructor == Conta){
            throw new Error("Você não pode instanciar esse construtor da classe 'Conta' diretamente, pois ela é abstrata!")
        }

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
        //Método que é feito pra ser sobreescrito, ABSTRATO
        throw new Error("Esse método é abstrato. Ele não foi sobreescrito na sua classe atual.")
    }


    // Vai ser utilizado pelas classes herdeiras
    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado
            return valorSacado
        }
        return 0;
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