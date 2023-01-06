import getTodoLists from './getTodoLists.js';
import todoListsView from './view/todoLists/todoLists.js';
import counterView from './view/counter/counter.js';
import filtersView from './view/filters/filters.js';

import registry from './registry.js';

registry.add('todoLists', todoListsView);
registry.add('counter', counterView);
registry.add('filters', filtersView);

const state = {
  todoLists: getTodoLists(),
  currentFilter: 'All',
};

const render = () => {
  window.requestAnimationFrame(() => {
    const main = document.querySelector('.todoApp');
    const newMain = registry.renderRoot(main, state);
    main.replaceWith(newMain);
  });
};

window.setInterval(() => {
  state.todoLists = getTodoLists();
  render();
}, 3000);

render();
