import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 11122233344);
const cliente2 = new Cliente("Alice", 22222233344);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(500);

const contaCorrenteAlice = new ContaCorrente(cliente2, 1001);

console.log("\r\n\r\n");
console.log(contaCorrenteAlice);
console.log(contaCorrenteRicardo);


let valor = 200;
contaCorrenteRicardo.transferir(valor, contaCorrenteAlice);

console.log("\r\n================================================\r\n");
console.log(contaCorrenteAlice);

console.log(contaCorrenteRicardo);