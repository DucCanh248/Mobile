interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function getTodo() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data: Todo = await response.json();
  console.log(data);
}

getTodo();
