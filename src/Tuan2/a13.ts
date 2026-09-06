function taskWithError(): Promise<never> {
  return new Promise((_resolve, reject) => {
    setTimeout(() => reject(new Error("Something went wrong")), 1000);
  });
}

async function runSafely() {
  try {
    const result = await taskWithError();
    console.log(result);
  } catch (error) {
    console.log("Bắt được lỗi:", (error as Error).message);
  }
}

runSafely();
