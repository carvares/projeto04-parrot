let nDeCartas;
let qualCarta;
const codigoCartas = [];
let codigoPronto = [];



const todasAsCartas = ["bobrossparrot", "explodyparrot","fiestaparrot","metalparrot","revertitparrot","tripletsparrot","unicornparrot","bobrossparrot", "explodyparrot","fiestaparrot","metalparrot","revertitparrot","tripletsparrot","unicornparrot"];

function quantasCartas(){
while (nDeCartas % 2 != 0 || nDeCartas == 0 || nDeCartas > 14 || nDeCartas < 4 ){
    nDeCartas = prompt("com quantas cartas quer jogar?");
}
}
quantasCartas();


    const cartas = document.querySelector(".cartas");
    for (i = 0; i < nDeCartas; i++ ){
        let carta = "img/" +todasAsCartas[i]+".gif";

            
    
        const conteudoCartas = `<div class="carta"  >

        <img src="img/front.png" class = "${carta}" alt="${carta}" id="${i}"  onclick="clickar(this)">
        </div>`;
        codigoCartas[i] = conteudoCartas;
    
        
        codigoPronto.push(codigoCartas[i]);

        
    }
    codigoPronto.sort(comparador);
    cartas.innerHTML = codigoPronto;
   
    let contador = 0;
    let jogadas = [];
    var primeiracarta ;
    var segundacarta ;
    var cartaSelecionada;
    let cartasPosicao = [];
function clickar(qualCarta){
        if(jogadas.length < 2 ){

        contador = contador + 1;
        jogadas.push(qualCarta.alt); 
        cartasPosicao.push(qualCarta.id);

        
         
        
        virarCarta(qualCarta);
        contadordecartas();
    }       
}
function contadordecartas(){
    if (jogadas.length == 2){
        if (jogadas[0] != jogadas[1]){
        
           setTimeout(desfazerSelecao, 1000);
            

        } else{
            nDeCartas -= 2;
            if(nDeCartas == 0){
                alert("Você ganhou em "+contador+" jogadas!")
            }
            jogadas =[];
        cartasPosicao =[];
    }   
    }
    
}

function virarCarta(qualCarta){
    qualCarta.classList.add("virada");
    qualCarta.setAttribute('src',qualCarta.alt);
    qualCarta.setAttribute('onclick',"") 
}

function desfazerSelecao(){
            primeiracarta = document.getElementById(cartasPosicao[0]);
            primeiracarta.classList.remove("virada");
            primeiracarta.setAttribute('src',"img/front.png");
            primeiracarta.setAttribute('onclick',"clickar(this)");

            segundacarta= document.getElementById(cartasPosicao[1]);
            segundacarta.classList.remove("virada");
            segundacarta.setAttribute('src',"img/front.png");
            segundacarta.setAttribute('onclick',"clickar(this)");

            jogadas = [];
            cartasPosicao = [];
}



// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}