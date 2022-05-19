export class ContaCorrente{
    agencia;
    // _saldo = 0 https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
        }
        return valor
    }

    depositar(valor){
        if(valor >0){
            this._saldo += valor;
        }
        return
    }
}