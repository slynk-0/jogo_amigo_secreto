let amigos = [];

function adicionarAmigo() {
    
    let amigoInput = document.getElementById('amigo'); //pegando o id "amigo" no
    //html
    let nomeAmigo = amigoInput.value;

    
    if (nomeAmigo == '') { //checando se o campo está vazio
        alert('Por favor, insira um nome.');
        return; 
    }
    amigos.push(nomeAmigo); //acrescentando o nome do amigo.
    amigoInput.value = '';
    atualizarListaAmigos(); //chamando a função para que a lista seja atualizada
}

function atualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos')

    lista.innerHTML = '';
    
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        //criando um <li> pra cada índice de nome.  
        item.textContent = amigos[i];
        lista.appendChild(item); //acrescentando à lista
    }
}

function sortearAmigo() {
    if (amigos.length <= 1) {
        alert('adicione pelo menos dois amigos pra sortear.');
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    //usando o indice do array amigos pra "referenciar" o math random
    //e o math floor pra arredondar pra baixo.

    let amigoSorteado = amigos[indiceAleatorio]; //aplicando o math random
    //e o math floor ao índice.
    let resultadoElemento = document.getElementById('resultado');

    resultadoElemento.innerHTML = `<li class="result-list">Amigo sorteado: ${amigoSorteado}</li>`;

}
