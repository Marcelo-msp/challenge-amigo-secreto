//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo(){
    amigos.push(document.getElementById('amigo').value); //adiciona o nome digitado na lista de amigos
    document.getElementById('amigo').value = ''; //limpa o campo de texto
    
}