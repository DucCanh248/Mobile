function simulateTask(time: number, name: string): Promise<string> {
  return new Promise((resolve) => setTimeout(() => resolve(`${name} xong`), time));
}

async function runSequential() {
  const result1 = await simulateTask(1000, "Task 1");
  console.log(result1);

  const result2 = await simulateTask(1000, "Task 2");
  console.log(result2);

  const result3 = await simulateTask(1000, "Task 3");
  console.log(result3);
}

runSequential();
