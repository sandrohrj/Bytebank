import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233344;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 22222233344;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500);

const contaCorrenteAlice = new ContaCorrente();
contaCorrenteAlice.agencia = 1001;
contaCorrenteAlice.cliente = cliente2;

console.log("\r\n*********************************************\r\n");
console.log(contaCorrenteAlice);
console.log(contaCorrenteRicardo);

let valor = 200;
contaCorrenteRicardo.transferir(valor, contaCorrenteAlice);

console.log("\r\n*********************************************\r\n");
console.log(contaCorrenteAlice);
console.log(contaCorrenteRicardo);
console.log("valor: ", valor);