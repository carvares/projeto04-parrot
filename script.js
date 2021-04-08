let ndecartas;
let qualcarta;
const todasAsCartas = ["bobrossparrot", "explodyparrot","fiestaparrot","metalparrot","revertitparrot","tripletsparrot","unicornparrot","bobrossparrot", "explodyparrot","fiestaparrot","metalparrot","revertitparrot","tripletsparrot","unicornparrot"];

const codigocartas = [];
let codigopronto = "<!--...-->";

function quantascartas(){
ndecartas = prompt("com quantas cartas quer jogar?");
while (ndecartas % 2 != 0 || ndecartas == 0 || ndecartas > 14 || ndecartas < 4 ){
    ndecartas = prompt("com quantas cartas quer jogar?");
}
}
quantascartas();
const nDeGifs = ndecartas / 2;


    const cartas = document.querySelector(".cartas");
    for (i = 0; i < ndecartas; i++ ){
        let carta = "img/" +todasAsCartas[i]+".gif";

            
    
        const conteudoCartas = `
        <div class="carta"  >

        <img src="img/front.png" class = "${carta}" alt="papagaiopng" id="${carta}"  onclick="virarcarta(this)">
        </div>
        `;
        codigocartas[i] = conteudoCartas;
    
        
        codigopronto = codigopronto + codigocartas[i];
    }
    cartas.innerHTML = codigopronto;
   
    let contador = 0;
    let jogadas = [];
function virarcarta(qualcarta){
        
        contador = contador + 1;
        console.log(contador);
        console.log(jogadas);
      
        jogadas.push(qualcarta.id); 
        if (qualcarta.classList.contains("virada")){
            qualcarta.classList.remove("virada");
            qualcarta.setAttribute('src',"img/front.png");
            qualcarta.setAttribute('onclick',"onclick='virarcarta(this)'")
            contadordecartas();
        }else {
        desvirar(qualcarta);
        contadordecartas();
        }


}
function contadordecartas(){
    if (jogadas.length == 2){



        if (jogadas[0] == jogadas[1]){
        console.log("acertou");
        jogadas = [];


    } else{
        jogadas = [];
    }
    
    }
}

function desvirar(qualcarta){
    qualcarta.classList.add("virada");
    qualcarta.setAttribute('src',qualcarta.id);
    qualcarta.setAttribute('onclick',"")
}
