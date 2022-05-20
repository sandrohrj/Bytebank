import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
<<<<<<< HEAD
<<<<<<< HEAD

const cliente1 = new Cliente("Ricardo", 11122233344);

const cliente2 = new Cliente("Alice", 22222233344);
=======
>>>>>>> b3effd1eb5c7377d4681de6bb3cb048bb88f2e57
=======
>>>>>>> b3effd1eb5c7377d4681de6bb3cb048bb88f2e57

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
//contaCorrenteRicardo.agencia = 1001;
//contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500);

const contaCorrenteAlice = new ContaCorrente(cliente2, 1001);
//contaCorrenteAlice.agencia = 1001;
//contaCorrenteAlice.cliente = cliente2;

<<<<<<< HEAD
console.log("\r\n*********************************************\r\n");
console.log(contaCorrenteAlice);
console.log(contaCorrenteRicardo);

=======
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

<<<<<<< HEAD
>>>>>>> b3effd1eb5c7377d4681de6bb3cb048bb88f2e57
=======
>>>>>>> b3effd1eb5c7377d4681de6bb3cb048bb88f2e57
let valor = 200;
contaCorrenteRicardo.transferir(valor, contaCorrenteAlice);

console.log("\r\n*********************************************\r\n");
console.log(contaCorrenteAlice);
<<<<<<< HEAD
<<<<<<< HEAD
console.log(contaCorrenteRicardo);
=======
console.log(contaCorrenteRicardo);
console.log("valor: ", valor);
>>>>>>> b3effd1eb5c7377d4681de6bb3cb048bb88f2e57
=======
console.log(contaCorrenteRicardo);
console.log("valor: ", valor);
>>>>>>> b3effd1eb5c7377d4681de6bb3cb048bb88f2e57
