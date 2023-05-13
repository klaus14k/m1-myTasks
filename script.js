const tasks = [
  {
    titulo: "Comprar comida para o gato",
    tipo: "Urgente",
  },
  {
    titulo: "Consertar Computador",
    tipo: "Prioritário",
  },
  {
    titulo: "Beber água",
    tipo: "Normal",
  },
];

function createCard(taskInfo) {
  // Criando elementos necessários
  const li = document.createElement("li");
  const div = document.createElement("div");
  const span = document.createElement("span");
  const p = document.createElement("p");

  // Adicionando o titulo da tarefa como texto do paragrafo
  p.innerText = taskInfo.titulo;

  // Adicionando span e paragrafo a div
  div.appendChild(span);
  div.appendChild(p);

  // Adicionando classe aos spans
    if (taskInfo.tipo === 'Urgente'){
      span.classList.add('span-urgent')
    }
    else if (taskInfo.tipo === 'Prioritário'){
      span.classList.add('span-priority')
    }
    else if (taskInfo.tipo === 'Normal'){
      span.classList.add('span-normal')
    }

  // Criando botão para deletar tarefa
  const button = document.createElement("button");

  // Adicionando icone ao botão
  button.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';

  // se o indice do botao que eu cliquei for igual ao o meu item atual eu removo o atual com splice
  button.addEventListener('click', function(){
    const currentTask = tasks.indexOf(taskInfo)
    tasks.splice(currentTask, 1)      
    renderElements(tasks)
  })

  /// Adicionando a div e o botão de deletar ao list item
  li.appendChild(div);
  li.appendChild(button);

  return li;
}

function renderElements(taskList) {
  const htmlList = document.querySelector(".tasks");
  htmlList.innerHTML = "";

  // Ajustar a lógica

  for (let i = 0; i < taskList.length; i++){
    const currentTask = taskList[i]

    let card = createCard(currentTask)
    htmlList.appendChild(card)
  }
}
renderElements(tasks);

const AddTaskButton = document.getElementById('btnSubmit')
const inputTitle = document.getElementById('input_title')
const inputPriority = document.getElementById('input_priority')

AddTaskButton.addEventListener('click',function(e){
  if(inputTitle.value != ''){
    e.preventDefault()

    let newTaskObj = {}
    newTaskObj.titulo = inputTitle.value
    newTaskObj.tipo = inputPriority.value
    inputTitle.value = ""

    tasks.push(newTaskObj)
    renderElements(tasks)
  }
})