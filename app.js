let amigos = [];

function adicionarAmigo(){
    let nomeAmigo = document.getElementById("amigo");
    if(nomeAmigo === ""){
        alert("Por favor, insira um nome.");
    }
    else{
        amigos.push(nomeAmigo.value);
        nomeAmigo.value = "";
    }
    atualizaListaDeAmigos();

    let campoResultado = document.getElementById("resultado");
    campoResultado.innerHTML = '';
}

function atualizaListaDeAmigos(){
    limparLista();
    for(let i = 0; i < amigos.length; i++){
        listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo(){
    if(amigos.length > 0){
        limparLista();
        let indice = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = document.getElementById("resultado");
        amigoSorteado.innerHTML = amigos[indice];
    }
    else {
        alert("Insira amigos para sortear");
    }
}

function limparLista(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
}