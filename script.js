let ndecartas;
let qualcarta;
const todasAsCartas = ["bobrossparrot", "explodyparrot","fiestaparrot","metalparrot","revertitparrot","tripletsparrot","unicornparrot"];

const codigocartas = [];
let codigopronto = "<!--...-->";

function quantascartas(){
while (ndecartas % 2 != 0 || ndecartas == 0 || ndecartas > 14 || ndecartas < 4 ){
    ndecartas = prompt("com quantas cartas quer jogar?");
}
}
quantascartas();
const nDeGifs = ndecartas / 2;


    const cartas = document.querySelector(".cartas");
    for (i = 0; i < nDeGifs; i++ ){
        let carta = "img/" +todasAsCartas[i]+".gif";

            
    
        const conteudoCartas = `
        <div class="carta"  >

        <img src="img/front.png" class = "${carta}" alt="papagaiopng" id="${carta}"  onclick="clickarCarta(this)">
        </div>
        `;
        codigocartas[i] = conteudoCartas;
    
        
        codigopronto = codigopronto + codigocartas[i];
    }
    cartas.innerHTML = codigopronto + codigopronto;
   
    let contador = 0;
    let jogadas = [];
    var primeiracarta ;
    var segundacarta ;

function clickarCarta(qualcarta){
        if(jogadas.length < 2 ){

        contador = contador + 1;
        console.log(contador);
        console.log(jogadas);
        jogadas.push(qualcarta.id); 
        
        virarCarta(qualcarta);
        contadordecartas();
    }       
}
function contadordecartas(){
    if (jogadas.length == 2){
        if (jogadas[0] != jogadas[1]){
        
           setTimeout(desfazerSelecao, 2000);
            

        } else{
            jogadas =[];}   
    }
    
}

function virarCarta(qualcarta){
    qualcarta.classList.add("virada");
    qualcarta.setAttribute('src',qualcarta.id);
    qualcarta.setAttribute('onclick',"") 
}
function resetararray(qualarray){
    qualarray = [];
    
}
function desfazerSelecao(){
            primeiracarta = document.getElementById(jogadas[0]);
            primeiracarta.classList.remove("virada");
            primeiracarta.setAttribute('src',"img/front.png");
            primeiracarta.setAttribute('onclick',"clickarCarta(this)");

            segundacarta= document.getElementById(jogadas[1]);
            segundacarta.classList.remove("virada");
            segundacarta.setAttribute('src',"img/front.png");
            segundacarta.setAttribute('onclick',"clickarCarta(this)");

            jogadas = [];

}