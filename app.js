//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let inputAmigo = document.querySelector('#amigo');
    let nomeAmigo = inputAmigo.value;

    if (nomeAmigo === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

    amigos.push(nomeAmigo);

    atualizarLista();

    inputAmigo.value = '';
}

function atualizarLista() {
    let listaAmigos = document.querySelector('#listaAmigos');
    listaAmigos.innerHTML = ''; 

    let i = 0; 
    while (i < amigos.length) {
        let itemLista = document.createElement('li');
        itemLista.textContent = amigos[i]; 
        listaAmigos.appendChild(itemLista); 
        i++; 
    }
}
