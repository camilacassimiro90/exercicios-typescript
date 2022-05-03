"use strict";
exports.__esModule = true;
var Aluno = /** @class */ (function () {
    function Aluno(nome, idade, rua, matricula, cadeiras) {
        this.nome = nome;
        this.idade = idade;
        this.rua = rua;
        this.matricula = matricula;
        this.cadeiras = cadeiras;
    }
    Aluno.prototype.cadastrar = function () {
        console.log(aluno1);
    };
    ;
    return Aluno;
}());
;
var aluno1 = new Aluno("Camila", 31, "Fictícia", 88000888, ["Github", "Javascript", "SASS", "Typescript", "Angular"]);
aluno1.cadastrar();
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, idade, rua, identificador, setor) {
        this.nome = nome;
        this.idade = idade;
        this.rua = rua;
        this.identificador = identificador;
        this.setor = setor;
    }
    Funcionario.prototype.cadastrar = function () {
        console.log(funcionario1);
    };
    ;
    return Funcionario;
}());
;
var funcionario1 = new Funcionario('Maria', 34, "Fictícia", 123321, "Administrativo");
funcionario1.cadastrar();
