let btnSorte = document.querySelector("#btn-sorte");
let codigo = document.querySelector("#codigo");

btnSorte.addEventListener("click", sorteNumero);

function sorteNumero(){

    let numero = Math.floor(Math.random() * 100);

    codigo.innerHTML = numero

}