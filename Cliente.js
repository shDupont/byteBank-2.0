//Ser autenticavel significa ter o método autenticar

export class Cliente{

    constructor(nome, cpf, senha){
        this.nome = nome
        this._cpf = cpf
        this._senha = senha
    }


    get cpf(){
        return this._cpf
    
    }

    autenticar(senha){
        return senha == this._senha
    }

    cadastrarSenha(senha){
        this._senha = senha
    }

    
}