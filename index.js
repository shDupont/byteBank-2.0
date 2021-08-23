import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Contas/ContaCorrente.js";
import { ContaPoupanca } from "./Contas/ContaPoupanca.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

// Conta do Gustavo
const clienteGustavo = new Cliente('Gustavo Dupont', '391.391.391-76')
const contaGustavo = new ContaCorrente(clienteGustavo, 1001, 0)
contaGustavo.depositar(1000);
//console.log(contaGustavo)

// Conta da Letícia
const clienteLeticia = new Cliente('Letícia Dupont', '555.555.555-74')
const contaLeticia = new ContaCorrente(clienteLeticia, 1001, 0)
contaLeticia.depositar(1000);
//console.log(contaLeticia)

// Transferencia 
contaGustavo.transferir(200, contaLeticia)
const ContaPoupancaLetícia = new ContaPoupanca(clienteLeticia, 1000, 0)

console.log(contaLeticia)
console.log(contaGustavo)

console.log(ContaCorrente.numeroDeContas)
console.log(ContaPoupancaLetícia)

contaLeticia.sacar(100)
console.log(contaLeticia)

// const contaAlice = new Conta(clienteLeticia, 1000, 5)

const diretor = new Diretor("Rodrigo", 1000, 1000000000)
const gerente = new Gerente("Ricardo", 5000, 4544542125)
diretor.cadastrarSenha("123456789")
gerente.cadastrarSenha("12345")

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789")
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "12345")
console.log(diretorEstaLogado)
console.log(gerenteEstaLogado)

//Polimorfismo::::::
//Diferentes objetos, classes, sendo tratadas da mesma forma. 
clienteLeticia.cadastrarSenha("12345")
const clienteEstaLogado = SistemaAutenticacao.login(clienteLeticia, "12345")
console.log(clienteEstaLogado)