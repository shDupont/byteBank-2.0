import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

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