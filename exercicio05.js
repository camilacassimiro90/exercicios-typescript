var Animal = /** @class */ (function () {
    function Animal(nome, raca, pelagem, peso) {
        this.nome = nome;
        this.raca = raca;
        this.corPelagem = pelagem;
        this.peso = peso;
    }
    return Animal;
}());
var thamy = new Animal("thamy", "undefined", "cinza", 15);
console.log(thamy);
