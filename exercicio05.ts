class Animal{
  nome:string;
  raca:string;
  corPelagem:string;
  peso:number;

  constructor(nome:string, raca:string, pelagem:string, peso:number){
      this.nome = nome;
      this.raca = raca;
      this.corPelagem = pelagem;
      this.peso = peso
  }
}

const thamy = new Animal("thamy", "undefined", "cinza", 15)

console.log(thamy)