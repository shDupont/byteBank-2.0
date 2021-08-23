export class Funcionario{
    constructor(nome, salario, cpf, senha){
        this._nome = nome
        this._salario = salario
        this._cpf = cpf

        this._bonificacao = 1.0
        this._senha = senha;
    }

    autenticar(senha){
        return senha == this._senha
    }

    cadastrarSenha(senha){
        this._senha = senha
    }
}