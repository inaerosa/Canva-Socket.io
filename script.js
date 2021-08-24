//o codigo só vai rodar quando tudo tiver carregado na tela 
document.addEventListener('DOMContentLoaded', ()=>{

    // o mouse é o pincel que vai determinar pos.x/y e posAnterior.x/y
    const pincel ={
        ativo: false,
        movendo: false,
        pos: {x: 0,y: 0},
        posAnterior: null
    } 
//para fazer uma linha
const tela = document.querySelector("#tela");
//o context é o que realmente faz o desenho 
//o desenho nao modifica a tela, e sim o contexto dela
const contexto = tela.getContext('2d'); //metodo canva

//definindo tamanho da tela 

tela.width = 700;
tela.height = 500;

contexto.lineWidth = 10;

const vermelho = document.querySelector("#vermelho");

vermelho.addEventListener('click', () =>{
    vermelho.border = 2;
    contexto.strokeStyle = '#ff0000';
})

const azul = document.querySelector ("#azul");

azul.addEventListener('click', () =>{
    contexto.strokeStyle = 'blue';
})

const preto = document.querySelector("#preto");
preto.addEventListener('click', ()=>{
    contexto.strokeStyle = 'black';
})

const fina = document.querySelector("#fina");
fina.addEventListener('click', ()=>{
    contexto.lineWidth = 2;
})

const media = document.querySelector("#media");
media.addEventListener("click", () =>{
    contexto.lineWidth = 5;
})

const grossa = document.querySelector("#grossa");
grossa.addEventListener('click', () =>{
    contexto.lineWidth = 10;
})

const borracha = document.querySelector("#borracha");
borracha.addEventListener('click', () =>{
    contexto.strokeStyle = 'white';
    contexto.lineWidth = 'black';
})
//função para desenhar linhas 

const desenharLinha = (linha) =>{
    contexto.beginPath();//beginPath inicia um caminho
    contexto.moveTo (linha.posAnterior.x,linha.posAnterior.y);//coordenadas do cursor
    contexto.lineTo(linha.pos.x, linha.pos.y); //definindo ponto inicio e fim

    //finalmente desenha
    contexto.stroke();
}

// desenharLinha({pos: {x: 350, y: 200}, posAnterior:{x: 10, y: 10}});


    tela.onmousedown = (evento) =>{pincel.ativo = true};
    tela.onmouseup = (evento) =>{pincel.ativo = false}

    tela.onmousemove = (evento) =>{
        //clienteX posição x do evento
        pincel.pos.x = evento.clientX;
        pincel.pos.y = evento.clientY;
        pincel.movendo = true;

    }

    const ciclo = ()=>{
        if (pincel.ativo && pincel.movendo && pincel.posAnterior){
            desenharLinha({pos: pincel.pos, posAnterior: pincel.posAnterior})
            pincel.movendo = false;
        }
        pincel.posAnterior = {x:pincel.pos.x, y:pincel.pos.y};

        setTimeout(ciclo, 5);
    }
    ciclo();



    
});


let palavras = ["casa", "armario","penteadeira","fogao","vaso","mesa","garfo","faca"];
function geraPalavras(){
    var p = palavras[ Math.floor( Math.random() * palavras.length ) ];
    document.getElementById("test").innerHTML = p; 
    contexto.beginPath();
    contexto.rect(100,100,100,100);
    contexto.fillStyle = "white";
    contexto.fill();
}
