function simulateTask(id: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Task ${id} hoàn thành`), Math.random() * 2000);
  });
}

async function batchProcess() {
  const tasks = [1, 2, 3, 4, 5].map((id) => simulateTask(id));
  const results = await Promise.all(tasks);
  results.forEach((r) => console.log(r));
}

batchProcess();
