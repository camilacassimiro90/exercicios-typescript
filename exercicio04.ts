class Filme{
  nome:string;
  anoDeLancamento:number;
  diretor:string;
}

const theHobbit = new Filme();
theHobbit.nome = "O Hobbit: Uma Jornada Inesperada";
theHobbit.anoDeLancamento = 2012;
theHobbit.diretor = "Peter Jackson";

console.log(theHobbit)