const btnStart = document.getElementById('btnStart');
const btnStop = document.getElementById('btnStop');
const inputMsg = document.getElementById('msn');
let contador = 0

let rec = new webkitSpeechRecognition();
rec.lang = "es-AR";
rec.continuous = true;
rec.interimResults = false;

rec.onresult = (event) => {
    const results = event.results;
    console.log(results);
    const frase = results[results.length - 1][0].transcript;
    inputMsg.value += frase
}

rec.onend = (event) => {
    console.log('microfono deja de escuchar voz');
}

rec.onerror = (event) => {
    console.log(event.error);
}

function Change() {
    if (contador === 0) {

        rec.start();
        btnStart.classList.add('On')
        contador = 1

    } else {

        rec.abort();
        btnStart.classList.remove('On')
        contador = 0
    }
}


btnStart.addEventListener('click', Change, true)


