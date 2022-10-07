// catturo l'evento click sul pulsante e avvio la funzione di calcolo e stampa biglietto
const btnCalcoloBiglietto = document.getElementById('btnCalcoloBiglietto');
btnCalcoloBiglietto.addEventListener('click', calcolaBiglietto);

function calcolaBiglietto() {
//raccolgo dati dall'utente
const nomePasseg = document.getElementById('nomePasseg').value;
const cognomePasseg = document.getElementById('cognomePasseg').value;
const cittaPartenza = document.getElementById('cittaPartenza').value;
const cittaDestinazione = document.getElementById('cittaDestinazione').value;

// raccolgo numero km da percorrere e li arrotondo
const numeroKm = Math.round(document.getElementById('numeroKm').value);

// raccolgo anno di nascita e converto risultato in numero intero per poterci fare dei calcoli
let userAge = document.getElementById('annoNascita').value;
userAge = parseInt(userAge);

// ricavo l'anno corrente da sottrarre all'anno di nascita dell'utente per calcolare l'età
const today = new Date();
const dataTicket = today.getDay() + "/" + today.getMonth() + "/" + today.getFullYear();

const year = today.getFullYear();
userAge = year - userAge;

// assegno alla variabile kmPrice il prezzo del biglietto moltiplicando il costo base per il numero di km che l'utente vuole percorrere
var kmPrice = parseInt(numeroKm) * 0.21

// costrutto per elaborare ogni numero alla seconda cifra decimale
const format = (num, decimals) => num.toLocaleString('en-US', {
    minimumFractionDigits: 2,      
    maximumFractionDigits: 2,
 });

// innesto il codice html che disegna il biglietto
const stampaBiglietto = `
<div class="container m-auto py-md-4">
<div class="d-flex row bg-danger text-white">
    <div class="col-12 col-md-5 d-flex flex-column align-items-start py-3 px-4 taglio_sup">
        <h3 class="fw-bold">Boarding Pass</h3>
        <p class="fs-6 m-0 pb-1 fw-light">Lorem Ipsum Dolor Sit Amet</p>
    </div>
    <div class="col-12 col-md-7 d-flex align-items-center px-4">
        <h2 class="fs-1 text-uppercase fw-bold">Train Ticket</h2>
        <img src="./img/train-21.svg" alt="Train icon" width="42rem">
    </div>
</div>
<div class="d-flex row d-flex align-items-start sfondo position-relative">
    <div class="col-12 col-md-5 ticket taglio_inf px-4 pt-3 pb-5 text-uppercase">
        <h4 class="fs-5 fw-normal">Passeggero:</h4>
        <h4 id="nome_pass01" class="fs-4 fw-bold pb-2"></h4>
        <h4 class="fs-5 fw-normal">Partenza da:</h4>
        <h4 id="part01" class="fs-4 fw-bold pb-2"></h4>
        <h4 class="fs-5 fw-normal">Arrivo a:</h4>
        <h4 id="dest01" class="fs-4 fw-bold pb-2"></h4>
        <h4 class="fs-5 fw-normal">Classe:</h4>
        <h4 class="fs-4 fw-bold pb-2">Business</h4>
        <h4 class="fs-5 fw-normal">Data:</h4>
        <h4 id="data01" class="fs-4 fw-bold pb-2"></h4>
    </div>
    <div id="sconto" class="col-12 col-md-7 ticket px-4 pt-3 text-uppercase">
        <h4 class="fs-5 fw-normal">Passeggero: <strong  id="nome_pass02"></strong></h4>
        <h4 class="fs-5 fw-normal">Partenza da: <strong id="part02"></strong> con arrivo a: <strong id="dest02"></strong></h4>
        <h4 class="pt-4 fs-3 fw-normal">Data: <strong id="data02"></strong></h4>
        <h4 class="fs-3 fw-normal">Classe: <strong>Business</strong></h4>
        <h4 class="pt-4 fs-3 fw-normal">Posto: <strong>20A</strong></h4>
        <h4 class="pb-4 fs-6 fw-normal">Prezzo:
            <span id="prezzo_scontato"></span>
            <span id="prezzo_intero"></span>
        </h4>
        <div class="row"><img src="./img/vecteezy_barcode_1199358.png" alt="barcode" class="w-75"></div>
    </div>
</div>
</div>
`
// recupero l'id #biglietto e stampo il biglietto
const biglietto = document.getElementById('biglietto');
biglietto.innerHTML = stampaBiglietto;

if(userAge < 18) {
    let underagePrice = format(kmPrice / 1.20);
    let under18 = document.getElementById("sconto");
    under18.classList.add("under18");
    document.getElementById('prezzo_scontato').innerHTML = `€ ${underagePrice}`;
    document.getElementById('prezzo_intero').innerHTML = `<s>Anziché €${kmPrice}</s>`;
} else if(userAge >= 65) {
    let over65Price = format(kmPrice / 1.40);
    let over65 = document.getElementById("sconto");
    over65.classList.add("over65");
    document.getElementById('prezzo_scontato').innerHTML = '€' + over65Price;
    document.getElementById('prezzo_intero').innerHTML = `<s>Anziché €${kmPrice}</s>`;
} else {
    document.getElementById('prezzo_intero').innerHTML = '€' + kmPrice;
}

// stampo la data di oggi sul biglietto
document.getElementById('data01').innerHTML = dataTicket;
document.getElementById('data02').innerHTML = dataTicket;

// recupero gli elementi html e inserisco i dati sul biglietto
document.getElementById('nome_pass01').innerHTML = nomePasseg + ' ' + cognomePasseg;
document.getElementById('nome_pass02').innerHTML = nomePasseg + ' ' + cognomePasseg;
document.getElementById('part01').innerHTML = cittaPartenza;
document.getElementById('part02').innerHTML = cittaPartenza;
document.getElementById('dest01').innerHTML = cittaDestinazione;
document.getElementById('dest02').innerHTML = cittaDestinazione;

}