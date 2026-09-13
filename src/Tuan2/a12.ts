function simulateTask(time: number): Promise<string> {
  return new Promise((resolve) => setTimeout(() => resolve("Task done"), time));
}

async function runTask() {
  console.log("Bắt đầu...");
  const result = await simulateTask(2000);
  console.log(result);
}

runTask();
