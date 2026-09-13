function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  console.log("Bắt đầu chờ...");
  await wait(5000);
  console.log("Đã chờ xong 5 giây");
}

run();
