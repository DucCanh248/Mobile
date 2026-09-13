function simulateTask(time: number, name: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${name} xong sau ${time}ms`), time);
  });
}

const task1 = simulateTask(1000, "Task 1");
const task2 = simulateTask(2000, "Task 2");
const task3 = simulateTask(1500, "Task 3");

Promise.all([task1, task2, task3]).then((results) => {
  console.log("Tất cả đã xong:", results);
});
