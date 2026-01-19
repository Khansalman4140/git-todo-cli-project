let todos = [];

function addTodo(task) { // This change is from master branch
  todos.push(task);
  return todos;
}
console.log("Master branch change at line 5");
function removeTodo(index) {
  todos.splice(index, 1);
  return todos;
}

function listTodos() {
  return todos;
}
// This is a test comment for Git practice
console.log("Todo App is running...");
module.exports = { addTodo, removeTodo, listTodos };
