import { Pessoa } from './exercicio08'


class Aluno implements Pessoa {
    nome: string;
    idade: number;
    rua: string;

    matricula:number;
    cadeiras:string[];

    constructor(nome:string, idade:number, rua:string, matricula:number, cadeiras:string[]) {
        this.nome = nome;
        this.idade = idade;
        this.rua = rua;
        this.matricula = matricula;
        this.cadeiras = cadeiras;
    }

    cadastrar() {
        console.log(aluno1)
    };
};
const aluno1 = new Aluno("Camila", 31, "Fictícia", 88000888, ["Github", "Javascript", "SASS", "Typescript", "Angular"]);
aluno1.cadastrar();

class Funcionario implements Pessoa {
    nome: string;
    idade: number;
    rua: string;

    identificador:number;
    setor:string;

    constructor(nome:string, idade:number, rua:string, identificador:number, setor:string) {
        this.nome = nome;
        this.idade = idade;
        this.rua = rua;
        this.identificador = identificador;
        this.setor = setor;
    }
    cadastrar(){
        console.log(funcionario1)
    };
};

const funcionario1 = new Funcionario('Maria', 34, "Fictícia", 123321, "Administrativo");

funcionario1.cadastrar()

