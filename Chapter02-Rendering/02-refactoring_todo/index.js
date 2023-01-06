import getTodoLists from './getTodoLists.js';
import appView from './view/app.js';

const state = {
  todoLists: getTodoLists(),
  currentFilter: 'All',
};

const main = document.querySelector('.todoApp');

window.requestAnimationFrame(() => {
  const newMain = appView(main, state);
  main.replaceWith(newMain);
});
