async function fetchWithRetry(url: string, retries: number): Promise<any> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log(`Lần thử ${attempt}...`);
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Lỗi HTTP: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.log(`Thất bại lần ${attempt}:`, (error as Error).message);
      if (attempt === retries) {
        throw new Error("Đã hết số lần thử lại");
      }
    }
  }
}

async function run() {
  try {
    const data = await fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1", 3);
    console.log("Thành công:", data);
  } catch (error) {
    console.log((error as Error).message);
  }
}

run();
