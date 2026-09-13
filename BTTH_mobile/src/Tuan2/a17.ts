function simulateTask(time: number, name: string): Promise<string> {
  return new Promise((resolve) => setTimeout(() => resolve(`${name} xong`), time));
}

async function runForAwait() {
  const tasks = [
    simulateTask(1000, "Task A"),
    simulateTask(500, "Task B"),
    simulateTask(1500, "Task C"),
  ];

  for await (const result of tasks) {
    console.log(result);
  }
}

runForAwait();
