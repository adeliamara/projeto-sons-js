function playSoung (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const keysList = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < keysList.length; contador++) {

    const tecla = keysList[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        playSoung(idAudio);
    }

}