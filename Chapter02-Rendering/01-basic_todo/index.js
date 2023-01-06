import getTodoLists from './getTodoLists.js';
import view from './view.js';

const state = {
  todoLists: getTodoLists(),
  currentFilter: 'All',
};

const main = document.querySelector('.todoApp');

window.requestAnimationFrame(() => {
  const newMain = view(main, state);
  main.replaceWith(newMain);
});
