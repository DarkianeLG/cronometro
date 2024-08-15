let cronometro = document.querySelector(".cronometro");
let btComecar = document.querySelector(".bt-comecar");
let btParar = document.querySelector(".bt-parar");
let btReiniciar = document.querySelector(".bt-reiniciar"); 

let segundos = 0;
let minutos = 0;
let horas = 0;
let interval;

// Função que inicia o cronômetro
function comecarCronometro() {
    // Define um intervalo que será executado a cada segundo (1000 ms)
    interval = setInterval(() => {
        segundos++; // Incrementa os segundos

        // Verifica se os segundos atingiram 60
        if (segundos === 60) {
            segundos = 0; // Reseta os segundos
            minutos++; // Incrementa os minutos

            // Verifica se os minutos atingiram 60
            if (minutos === 60) {
                minutos = 0; // Reseta os minutos
                horas++; // Incrementa as horas
            }
        }

        // Atualiza o texto do cronômetro com o tempo formatado
        cronometro.textContent = 
            (horas < 10 ? "0" + horas : horas) + ":" +
            (minutos < 10 ? "0" + minutos : minutos) + ":" +
            (segundos < 10 ? "0" + segundos : segundos);
    }, 1000);
}

// Evento de clique para o botão "Começar"
// Para qualquer intervalo anterior e inicia o cronômetro
btComecar.onclick = function () {
    clearInterval(interval); // Limpa o intervalo existente, se houver
    comecarCronometro(); // Inicia o cronômetro
}

// Evento de clique para o botão "Parar"
// Para o intervalo, pausando o cronômetro
btParar.onclick = function () {
    clearInterval(interval); // Pausa o cronômetro
}

// Evento de clique para o botão "Reiniciar"
// Reseta o cronômetro para 00:00:00
btReiniciar.onclick = function () {
    clearInterval(interval); // Pausa o cronômetro
    segundos = 0;
    minutos = 0;
    horas = 0;
    cronometro.textContent = "00:00:00"; // Reseta o display para 00:00:00
}



