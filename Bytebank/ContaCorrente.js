import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    agencia;
<<<<<<< HEAD
    _cliente;

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }
=======
    cliente;
>>>>>>> b3effd1eb5c7377d4681de6bb3cb048bb88f2e57

    // _saldo = 0 https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;

<<<<<<< HEAD
    get saldo(){
        return this._saldo;
    }

    constructor(cliente, agencia){
        this.agencia = agencia;
        this.cliente = cliente;
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }

    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {
=======
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
        
    }

    depositar(valor){
        if(valor <= 0){
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
>>>>>>> b3effd1eb5c7377d4681de6bb3cb048bb88f2e57
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}