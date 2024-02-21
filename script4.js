let chanceUsuario;
let areaUsuario;

areaUsuario = prompt("Escolha um numero entre 0 e 10");
while (chanceUsuario !=7) {
    if (areaUsuario == 7){
        alert("Parabéns você acertou!!");
    }
    else if (areaUsuario >10){
        alert("Esse número não faz parte de nosso jogo, escolha outro e tente novamente");
    }
    else {
        alert("Você errou, tente novamente!");
    }
    
}
