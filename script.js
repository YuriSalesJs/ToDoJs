let tarefa = document.getElementById('tarefa_Input')
let listaTarefas = document.getElementById('task_list')

function adicionar (){
    if(tarefa.value == ''){
        window.alert('[Erro] adicionar uma tarefa.')
    }else {
        let tarefas = JSON.parse(localStorage.getItem('tarefas')) || []

        let novaTarefa = {
            nome: tarefa.value,
            status: 'pendente'
        }

        tarefas.push(novaTarefa)

        localStorage.setItem('tarefas', JSON.stringify(tarefas))

        exibirTarefa(tarefas);

        tarefa.value = ''
    }
}

function carregarTarefas (){
    let tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
    exibirTarefa(tarefas)
}

function exibirTarefa(tarefas){
    listaTarefas.innerHTML = ''

    tarefas.forEach((tarefa, index) => {
        listaTarefas.insertAdjacentHTML('beforeend', 
            `<div id="tarefa-${index}" style="margin-bottom: 10px;">
                <li style="text-decoration: ${tarefa.status === 'concluída' ? 'line-through' : 'none'};">
                    ${tarefa.nome}
                </li>
                <button onclick="marcarConcluida(${index})">Concluir</button>
                <button onclick="removerTarefa(${index})">Remover</button>
            </div>`)
    })
}

function marcarConcluida(index){
    let tarefas = JSON.parse(localStorage.getItem('tarefas') || [])

    tarefas[index].status = 'concluída'

    localStorage.setItem('tarefas', JSON.stringify(tarefas))

    exibirTarefa(tarefas)

}

function removerTarefa(index){
    let tarefas = JSON.parse(localStorage.getItem('tarefas') || [])

    tarefas.splice(index, 1)

    localStorage.setItem('tarefas', JSON.stringify(tarefas))

    exibirTarefa(tarefas)
}

carregarTarefas()