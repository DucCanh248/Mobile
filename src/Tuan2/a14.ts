async function multiplyByThree(num: number): Promise<number> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return num * 3;
}

async function run() {
  const result = await multiplyByThree(5);
  console.log(result);
}

run();
