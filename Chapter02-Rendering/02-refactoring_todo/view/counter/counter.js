const getTodoCount = (todoLists) => {
  const notCompleted = todoLists.filter((todo) => !todo.completed);

  const { length } = notCompleted;
  if (length === 1) {
    return '1 Item left';
  }

  return `${length} Items left`;
};

export default (targetElement, { todoLists }) => {
  const newCounter = targetElement.cloneNode(true);
  newCounter.textContent = getTodoCount(todoLists);
  return newCounter;
};
