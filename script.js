const tarefas = document.querySelectorAll('.tarefa');
const colunas = document.querySelectorAll('.coluna');

// Variável para armazenar a tarefa sendo arrastada
let tarefaArrastada = null;

tarefas.forEach(tarefa => {
    tarefa.addEventListener('dragstart', iniciarArrasto);
    tarefa.addEventListener('dragend', finalizarArrasto);
});

colunas.forEach(coluna => {
    coluna.addEventListener('dragover', permitirSoltar);
    coluna.addEventListener('drop', soltarTarefa);
});

function iniciarArrasto(event) {
    // Funcao para iniciar o arrasto da tarefa
    tarefaArrastada = this;

    // Define o efeito visual do arrastar
    this.classList.add('tarefa-arrastando');
}

function finalizarArrasto(event) {
    this.classList.remove('tarefa-arrastando');
}

function permitirSoltar(event) {
    // Permitir soltar tarefa na coluna
    event.preventDefault();
}

function soltarTarefa(event) {
    // Permitir soltar tarefa na coluna
    event.preventDefault();

    if (tarefaArrastada) {
        this.querySelector('ul').appendChild(tarefaArrastada);
        tarefaArrastada = null;
    }
}

const formAdicionarTarefa = document.getElementById('adicionar-tarefa');

formAdicionarTarefa.addEventListener('submit', adicionarTarefa);

function adicionarTarefa(event) {
    event.preventDefault();

    const novaTarefa = document.getElementById('nova-tarefa').value;
    if (novaTarefa) {
        const novaTarefaElemento = document.createElement('li');

        novaTarefaElemento.innerHTML = novaTarefa;
        novaTarefaElemento.draggable = true;
        novaTarefaElemento.classList.add('tarefa');

        document.getElementById('tarefa-fazer').appendChild(novaTarefaElemento);
        document.getElementById('nova-tarefa').value = '';

        novaTarefaElemento.addEventListener('dragstart', iniciarArrasto);
        novaTarefaElemento.addEventListener('dragend', finalizarArrasto);
    }
}