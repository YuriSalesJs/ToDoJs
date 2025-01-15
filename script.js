let tarefa = document.getElementById('tarefa_Input')
let listaTarefas = document.getElementById('task_list')

function adicionar (){
    if(tarefa.value == ''){
        window.alert('[Erro] adicionar uma tarefa.')
    }else {
        listaTarefas.insertAdjacentHTML('beforeend', `<p>${tarefa.value}</p>`)
        listaTarefas.style.backgroundColor = 'white'
        localStorage.setItem('tarefa.value', tarefa)
    }
}