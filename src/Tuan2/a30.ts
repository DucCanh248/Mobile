async function fetchTodo(id: number) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  if (!response.ok) throw new Error(`Lỗi khi lấy todo ${id}`);
  return response.json();
}

async function run() {
  const ids = [1, 2, -1, 3];
  const results = await Promise.allSettled(ids.map((id) => fetchTodo(id)));

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Todo ${ids[index]}: Thành công`, result.value);
    } else {
      console.log(`Todo ${ids[index]}: Thất bại -`, result.reason.message);
    }
  });
}

run();
