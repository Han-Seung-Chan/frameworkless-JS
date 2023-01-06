import todoListsView from './todoLists/todoLists.js';
import counterView from './counter/counter.js';
import filtersView from './filters/filters.js';

export default (targetElement, state) => {
  const element = targetElement.cloneNode(true);

  const list = element.querySelector('.todo-list');
  const counter = element.querySelector('.todo-count');
  const filters = element.querySelector('.filters');

  list.replaceWith(todoListsView(list, state));
  counter.replaceWith(counterView(counter, state));
  filters.replaceWith(filtersView(filters, state));

  return element;
};
