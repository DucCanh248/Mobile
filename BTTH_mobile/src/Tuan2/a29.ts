function simulateTask(id: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Task ${id} hoàn thành`), 500);
  });
}

async function queueProcess() {
  const taskIds = [1, 2, 3, 4, 5];

  for (const id of taskIds) {
    const result = await simulateTask(id);
    console.log(result);
  }
}

queueProcess();
