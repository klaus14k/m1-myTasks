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

  // Criando botão para deletar tarefa
  const button = document.createElement("button");

  // Adicionando icone ao botão
  button.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';

  /// Adicionando a div e o botão de deletar ao list item
  li.appendChild(div);
  li.appendChild(button);

  return li;
}

function renderElements(taskList) {
  const htmlList = document.querySelector(".tasks");
  htmlList.innerHTML = "";

  // Ajustar a lógica
  let card = createCard(taskList[0]);
  htmlList.appendChild(card);

  card = createCard(taskList[1]);
  htmlList.appendChild(card);

  card = createCard(taskList[2]);
  htmlList.appendChild(card);
}

renderElements(tasks);
