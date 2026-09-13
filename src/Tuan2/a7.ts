function simulateTask(time: number, name: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${name} xong sau ${time}ms`), time);
  });
}

const taskA = simulateTask(3000, "Task A");
const taskB = simulateTask(1000, "Task B");

Promise.race([taskA, taskB]).then((result) => {
  console.log("Task xong đầu tiên:", result);
});
