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

        tarefas.push(tarefa.value)

        localStorage.setItem('tarefas', JSON.stringify(tarefas))

       /* AQUI VAI SER A FUNÇÃO DE EXIBIR A TAREFA
        listaTarefas.insertAdjacentHTML('beforeend', `<li>${tarefa.value}</li>`) */

        tarefa.value = ''
    }
}

function carregarTarefas (){
    let tarefas = JSON.parse(localStorage.getItem('tarefas')) || []

    tarefas.forEach(function(tarefaSalva) {listaTarefas.insertAdjacentHTML('beforeend', `<li>${tarefaSalva}</li>`)
        
    });
}

carregarTarefas()