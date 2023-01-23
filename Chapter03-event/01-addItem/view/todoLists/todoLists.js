let template;

const createNewTodoNode = () => {
  if (!template) {
    template = document.getElementById('todo-item');
  }

  return template.content.firstElementChild.cloneNode(true);
};
const getTodoElement = (todo) => {
  const { text } = todo;

  const element = createNewTodoNode();
  element.querySelector('label').textContent = text;

  return element;
};

export default (targetElement, { todoLists }, events) => {
  const newTodoList = targetElement.cloneNode(true);
  newTodoList.innerHTML = '';

  todoLists
    .map((todo, index) => getTodoElement(todo, index, events))
    .forEach((element) => newTodoList.appendChild(element));

  return newTodoList;
};
