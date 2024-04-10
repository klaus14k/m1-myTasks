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
]

function createCard(taskInfo) {
  const taskCard = document.createElement("li")
  const taskCardContent = document.createElement("div")
  const taskCardMarker = document.createElement("span")
  const taskCardTitle = document.createElement("p")

  taskCardTitle.innerText = taskInfo.titulo

  taskCardContent.appendChild(taskCardMarker)
  taskCardContent.appendChild(taskCardTitle)

  if (taskInfo.tipo === "Urgente"){
    taskCardMarker.classList.add("span-urgent")
  }
  else if (taskInfo.tipo === "Prioritário"){
    taskCardMarker.classList.add("span-priority")
  }
  else if (taskInfo.tipo === "Normal"){
    taskCardMarker.classList.add("span-normal")
  }

  const deleteButton = document.createElement("button")

  deleteButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>'

  deleteButton.addEventListener("click", function(){
    const currentTask = tasks.indexOf(taskInfo)
    tasks.splice(currentTask, 1)      
    renderElements(tasks)
  })

  taskCard.appendChild(taskCardContent)
  taskCard.appendChild(deleteButton)

  return taskCard
}

function renderElements(taskList) {
  const htmlList = document.querySelector(".tasks")
  htmlList.innerHTML = ""
  
  for (let i = 0; i < taskList.length; i++){
    const currentTask = taskList[i]
    let card = createCard(currentTask)
    htmlList.appendChild(card)
  }
  if (taskList.length === 0){
    const emptyListItem = document.createElement("li")
    emptyListItem.innerText = "Parece que você não tem tarefas a fazer, ou pelo menos ainda não adicionou nenhuma..."
    htmlList.appendChild(emptyListItem)
  }
}
renderElements(tasks)

function renderNewElement(){
  const AddTaskButton = document.getElementById("btnSubmit")
  const taskTitle = document.getElementById("input_title")
  const taskPriority = document.getElementById("input_priority")

  AddTaskButton.addEventListener("click",function(e){
    e.preventDefault()
    
    if(taskTitle.value != ""){
      let newTaskObj = {}
      newTaskObj.titulo = taskTitle.value
      newTaskObj.tipo = taskPriority.value
      taskTitle.value = ""

      tasks.push(newTaskObj)
      renderElements(tasks)
    }
  })
}
renderNewElement()