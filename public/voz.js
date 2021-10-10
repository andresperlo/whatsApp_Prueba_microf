const btnStart = document.getElementById('btnStart');
const btnStop = document.getElementById('btnStop');
const inputMsg = document.getElementById('msn');

let rec = new webkitSpeechRecognition();
rec.lang = "es-AR";
rec.continuous = true;
rec.interimResults = false;

rec.onresult = (event) => {
    const results = event.results;
    console.log(results);
    const frase = results[results.length -1][0].transcript;
    inputMsg.value += frase
}

btnStart.addEventListener('click', () => {
    rec.start();
})

btnStop.addEventListener('click', () => {
    rec.abort();
})