let i = true;

while( i === true){

let userChoice = prompt('Pedra papel ou tesoura: digite 1 para pedra, 2 para papel, 3 para tesoura');
if(userChoice == 1){
    userChoice = 'pedra';
} else if(userChoice == 2) {
    userChoice = 'papel';
} else if (userChoice == 3) {
    userChoice = 'tesoura';
} else {
    alert('Digite um comando valido!')
}

function playTheGame(userChoice) {
    let computerChoice = parseInt(Math.random() * 4)
    const gameArr= ['pedra', 'papel', 'tesoura'];

    computerChoice = gameArr[computerChoice];

    if(userChoice == 'pedra' && computerChoice == 'pedra') {
        alert('empate');
    } else if(userChoice == 'pedra' && computerChoice == 'papel') {
        alert('Você perdeu');
    } else if(userChoice == 'pedra' && computerChoice == 'tesoura') {
        alert('você venceu!');
    } else if(userChoice == 'papel' && computerChoice == 'pedra') {
        alert('Você venceu');
    } else if (userChoice == 'papel' && computerChoice == 'papel') {
        alert('empate');
    } else if (userChoice == 'papel' && computerChoice == 'tesoura') {
        alert('você perdeu!');
    } else if (userChoice == 'tesoura' && computerChoice == 'pedra') {
        alert('você perdeu');
    } else if (userChoice == 'tesoura' && computerChoice == 'papel') {
        alert('Você venceu');
    } else if (userChoice == 'tesoura' && computerChoice == 'tesoura') {
        alert('empate');
    }

    let startTheGame = confirm('vamos jogar novamente?')
        i = startTheGame;
}

playTheGame(userChoice);
}