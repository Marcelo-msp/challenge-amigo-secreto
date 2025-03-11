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
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista antes de adicionar novos elementos

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) { // Verifica se há amigos disponíveis
        alert('Nenhum amigo disponível para sortear!');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Gera um índice aleatório
    const amigoSorteado = amigos[indiceAleatorio]; // Obtém o nome sorteado

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${amigoSorteado}</li>`; // Atualiza o conteúdo do elemento de resultado
}