//let titulo = document.querySelector ("h1");
//titulo.innerHTML = "Jogo do Número Secreto";

//let paragrafo = document.querySelector ("p");
//paragrafo.innerHTML  = "Escolha um número entre 1 e 10";

//--------------------------------------------------------------
let numeroSorteado = [];

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let quantidadeLista = numeroSorteado.length;

    if (quantidadeLista == 10){
        numeroSorteado[];
    }


    if (numeroSorteado.includes(numeroEscolhido)){
        return gerarNumeroAleatorio
    } else {
        numeroSorteado.push(numeroEscolhido);
        return numeroEscolhido
    }
}

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function textoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function mensagemInicial(){
textoNaTela("h1", "Jogo do Número Secreto");
textoNaTela("p", "Escolha um número entre 1 e 10");
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector("input").value;
    console.log (chute == numeroSecreto);

    if (chute == numeroSecreto){
        textoNaTela ("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você é incrivel! E acertou com ${tentativas} ${palavraTentativa}`;
        textoNaTela ("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            textoNaTela ("h1", "Quase lá...")
            textoNaTela ("p", "O número secreto é menor");
        } else {
            textoNaTela ("h1", "Quase lá...")
            textoNaTela ("p", "O número secreto é maior");
        }
        tentativas++;
        limparCampo();
    }
}

function limparCampo (){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById("reiniciar").setAttribute ("didsbaled", true)
}