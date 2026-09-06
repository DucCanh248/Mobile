interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function getIncompleteTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
  const todos: Todo[] = await response.json();

  const incomplete = todos.filter((todo) => !todo.completed);
  console.log(incomplete);
}

getIncompleteTodos();
