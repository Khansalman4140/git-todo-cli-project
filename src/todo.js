let todos = [];

function addTodo(task) {
  todos.push(task);
  return todos;
}

function removeTodo(index) {
  todos.splice(index, 1);
  return todos;
}

function listTodos() {
  return todos;
}

module.exports = { addTodo, removeTodo, listTodos };
