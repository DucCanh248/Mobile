function fetchUser(id: number): Promise<{ id: number; name: string }> {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: `User ${id}` }), 3000);
  });
}

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  const timeout = new Promise<T>((_resolve, reject) => {
    setTimeout(() => reject(new Error("Timeout: API quá lâu")), ms);
  });
  return Promise.race([promise, timeout]);
}

async function run() {
  try {
    const user = await withTimeout(fetchUser(1), 2000);
    console.log(user);
  } catch (error) {
    console.log("Lỗi:", (error as Error).message);
  }
}

run();
