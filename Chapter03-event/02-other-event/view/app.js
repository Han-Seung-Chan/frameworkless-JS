let template;

const getTemplate = () => {
  if (!template) {
    template = document.getElementById('todo-app');
  }
  return template.content.firstElementChild.cloneNode(true);
};

const addEventHandler = (e, { addItem }) => {
  if (e.key !== 'Enter' || !e.target.value) return false;
  addItem(e.target.value);
  e.target.value = '';
};

export default (targetElement, state, events) => {
  const newApp = targetElement.cloneNode(true);
  newApp.innerHTML = '';
  newApp.appendChild(getTemplate());

  newApp
    .querySelector('.new-todo')
    .addEventListener('keypress', (e) => addEventHandler(e, events));

  return newApp;
};
