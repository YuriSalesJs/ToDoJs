let tarefa = document.getElementById('tarefa_Input')
let listaTarefas = document.getElementById('task_list')

function adicionar (){
    if(tarefa.value == ''){
        window.alert('[Erro] adicionar uma tarefa.')
    }else {
        let tarefas = JSON.parse(localStorage.getItem('tarefas')) || []

        tarefas.push(tarefa.value)

        localStorage.setItem('tarefas', JSON.stringify(tarefas))

        listaTarefas.insertAdjacentHTML('beforeend', `<p>${tarefa.value}</p>`)

        tarefa.value = ''
    }
}

function carregarTarefas (){
    let tarefas = JSON.parse(localStorage.getItem('tarefas')) || []

    tarefas.forEach(function(tarefaSalva) {listaTarefas.insertAdjacentHTML('beforeend', `<p>${tarefaSalva}</p>`)
        
    });
}

carregarTarefas()