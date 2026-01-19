const { addTodo, removeTodo, listTodos } = require('../src/todo');

test('add todo', () => {
  addTodo('learn git');
  expect(listTodos().length).toBe(1);
});

test('remove todo', () => {
  removeTodo(0);
  expect(listTodos().length).toBe(0);
});
