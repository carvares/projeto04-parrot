ndecartas = prompt("com quantas cartas quer jogar?");
const todasAsCartas = ["bobrossparrot.gif", "explodyparrot.gif","fiestaparrot.gif","metalparrot.gif","revertitparrot.gif","tripletsparrot.gif","unicornparrot.gif"];
const nDeGifs = ndecartas / 2;
const codigocartas = [];
let codigopronto = "<!--...-->";

while (ndecartas % 2 != 0 || ndecartas == 0){
    ndecartas = prompt("com quantas cartas quer jogar?");
}


    const cartas = document.querySelector(".cartas");
    for (i = 0; i < nDeGifs; i++ ){
        let carta = "img/" +todasAsCartas[i];

            
    
        const conteudoCartas = `
        <div class="carta"  "selecionada${i}">
        <img src="${carta}" alt="papagaio">

        </div>
        `;
        codigocartas[i] = conteudoCartas;
    
        
        codigopronto = codigopronto + codigocartas[i];
    }
    cartas.innerHTML = codigopronto;
    alert(codigocartas);
   










function virarcarta(qualcarta){


}