async function getMultipleTodos() {
  for (let i = 1; i <= 3; i++) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${i}`);
    const data = await response.json();
    console.log(data);
  }
}

getMultipleTodos();
