class heroi {
    constructor(nome, idade, tipo, ataque) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = ataque; // Corrigido!
    }
    atacar() {
        console.log(`O ${this.tipo} ${this.nome} ataca com sua golpe! ${this.ataque}`);
    }
}

let mago = new heroi("Harry", 55, "mago", "magia");
let guerreiro = new heroi("Connan", 30, "guerreiro", "espadada");
let ninja = new heroi("Naruto", 18, "ninja", "rasengan");
let assassino = new heroi("zoro", 20, "assassino", "facada na guela");

mago.atacar();
guerreiro.atacar();
ninja.atacar();
assassino.atacar();