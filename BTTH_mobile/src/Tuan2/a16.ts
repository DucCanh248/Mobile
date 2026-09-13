function simulateTask(time: number, name: string): Promise<string> {
  return new Promise((resolve) => setTimeout(() => resolve(`${name} xong`), time));
}

async function runParallel() {
  const [result1, result2, result3] = await Promise.all([
    simulateTask(1000, "Task 1"),
    simulateTask(1000, "Task 2"),
    simulateTask(1000, "Task 3"),
  ]);

  console.log(result1, result2, result3);
}

runParallel();
