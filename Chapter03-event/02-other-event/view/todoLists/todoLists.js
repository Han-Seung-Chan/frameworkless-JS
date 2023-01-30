let template;

const createNewTodoNode = () => {
  if (!template) {
    template = document.getElementById('todo-item');
  }

  return template.content.firstElementChild.cloneNode(true);
};

const getTodoElement = (todo, index) => {
  const { text, completed } = todo;

  const element = createNewTodoNode();

  element.querySelector('label').textContent = text;
  element.querySelector('.destroy').dataset.index = index;
  element.querySelector('.toggle').dataset.index = index;

  if (completed) {
    element.classList.add('completed');
    element.querySelector('input.toggle').checked = true;
  }

  return element;
};

const todoListEventHandler = (e, { deleteItem, completeItem }) => {
  if (e.target.matches('.destroy')) {
    deleteItem(e.target.dataset.index);
  }
  if (e.target.matches('.toggle')) {
    completeItem(e.target.dataset.index);
  }
};

export default (targetElement, { todoLists }, events) => {
  const newTodoList = targetElement.cloneNode(true);
  newTodoList.innerHTML = '';

  todoLists
    .map((todo, index) => getTodoElement(todo, index, events))
    .forEach((element) => newTodoList.appendChild(element));

  newTodoList.addEventListener('click', (e) => todoListEventHandler(e, events));

  return newTodoList;
};
