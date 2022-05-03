class Conta {
  protected numero:number;
  protected saldo:number;
  protected estaAtiva:boolean;
  protected dono:string;

  constructor(numero:number, saldo:number, estaAtiva:boolean, dono:string){
      this.numero = numero;
      this.saldo = saldo;
      this.estaAtiva = estaAtiva;
      this.dono = dono;
  }
};

class ContaEmpresa extends Conta {
  private limiteDeDeposito:number = 1000;

  constructor(numero:number, saldo:number, estaAtiva:boolean, dono:string){
      super(numero, saldo, estaAtiva, dono)
  }

  deposito(valor:number){
      if(valor <= this.limiteDeDeposito){
          console.log(`Depósito de R$ ${valor.toFixed(2)} feito`)
          this.saldo += valor
      } else {
          console.log(`Depósito de R$ ${valor.toFixed(2)} Não permitido! Ultrapassa o valor máximo.`)
      };
  };
  imprimeValorConta(){
      console.log(`Seu saldo é de R$ ${this.saldo.toFixed(2)}`);
  };

};

const valorDeposito = new ContaEmpresa(123321, 0, true, 'Camila');
valorDeposito.deposito(1000);
valorDeposito.deposito(900);
valorDeposito.deposito(700);
valorDeposito.deposito(400);
valorDeposito.deposito(300);
valorDeposito.deposito(200);
valorDeposito.imprimeValorConta();