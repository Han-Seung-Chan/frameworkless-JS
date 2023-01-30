import appView from './view/app.js';
import todoListsView from './view/todoLists/todoLists.js';
import counterView from './view/counter/counter.js';
import filtersView from './view/filters/filters.js';
import applyDiff from './applyDiff.js';

import registry from './registry.js';

registry.add('app', appView);
registry.add('todoLists', todoListsView);
registry.add('counter', counterView);
registry.add('filters', filtersView);

const state = {
  todoLists: [],
  currentFilter: 'All',
};

const events = {
  addItem: (text) => {
    state.todoLists.push({
      text,
      completed: false,
    });
    render();
  },
  deleteItem: (index) => {
    state.todoLists.splice(index, 1);
    render();
  },
  completeItem: (index) => {
    const target = state.todoLists[index];
    state.todoLists[index] = {
      text: target.text,
      completed: !target.completed,
    };
    render();
  },
};

const render = () => {
  window.requestAnimationFrame(() => {
    const main = document.querySelector('#root');
    const newMain = registry.renderRoot(main, state, events);
    applyDiff(document.body, main, newMain);
  });
};

render();
