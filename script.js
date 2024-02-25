var options = ['pedra', 'papel', 'tesoura'];

function escolherOpcaoAleatoria() {
    var indiceAleatorio = Math.floor(Math.random() * options.length);
    return options[indiceAleatorio];
}

function getComputerChoice(escolhajogador) {
    var escolhacomputador = escolherOpcaoAleatoria();
    console.log("O computador escolheu: " + escolhacomputador);

    if (escolhajogador === escolhacomputador) {
        console.log("Empate")
    } else if (
        (escolhajogador === 'pedra' && escolhacomputador === 'tesoura') ||
        (escolhajogador === 'tesoura' && escolhacomputador === 'papel') ||
        (escolhajogador === 'papel' && escolhacomputador === 'pedra')
    ) {
        var venceu = console.log("Você venceu");

    } else {
        console.log("Você Perdeu");
    }
}

function playgame(){
    for (i = 0; i <= 5; i++){
        var escolhajogador = prompt(` rodada (${i}) Escolha entre pedra,papel,tesoura`);
        console.log("Você escolheu: " + escolhajogador);
        getComputerChoice(escolhajogador);
    }
    
}
playgame()


