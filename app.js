//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo(){
    let amigo = document.getElementById('amigo').value; // Armazena o valor do campo de texto em uma variável
    if (amigo === '') { // Verifica se o campo de texto está vazio
        alert('Digite o nome do amigo!'); // Se estiver vazio, exibe um alerta
        return; // E interrompe a execução da função
    }
    if (amigos.includes(amigo)) { // Verifica se o nome digitado já está na lista de amigos
        alert('Este amigo já foi adicionado!'); // Se estiver, exibe um alerta
        return; // E interrompe a execução da função
    } else {
        amigos.push(amigo); // Adiciona o nome digitado na lista de amigos
        document.getElementById('amigo').value = ''; // Limpa o campo de texto
        atualizarListaAmigos(); // Atualiza a lista de amigos na interface
    }
}