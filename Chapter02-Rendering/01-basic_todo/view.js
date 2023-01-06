const getTodoElement = (todo) => {
  const { text, completed } = todo;
  console.log(text);
  return `
  <li ${completed ? 'class="completed"' : ''}>
    <div class="view">
      <input 
        ${completed ? 'checked' : ''}
        class="toggle" 
        type="checkbox">
      <label>${text}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="${text}">
  </li>`;
};

const getTodoCount = (todoLists) => {
  const { length } = todoLists.filter((todo) => !todo.completed);

  return `${length} Items left`;
};

export default (targetElement, state) => {
  const { currentFilter, todoLists } = state;
  const element = targetElement.cloneNode(true);

  const list = element.querySelector('.todo-list');
  const counter = element.querySelector('.todo-count');
  const filters = element.querySelector('.filters');

  list.innerHTML = todoLists
    .map((listInfo) => getTodoElement(listInfo))
    .join('');
  counter.textContent = getTodoCount(todoLists);

  Array.from(filters.querySelectorAll('li a')).forEach((a) => {
    if (a.textContent === currentFilter) {
      a.classList.add('selected');
    } else {
      a.classList.remove('selected');
    }
  });

  return element;
};
