function taskWithError(): Promise<never> {
  return new Promise((_resolve, reject) => {
    setTimeout(() => reject(new Error("Something went wrong")), 1000);
  });
}

taskWithError()
  .then((result) => console.log(result))
  .catch((error) => console.log("Lỗi:", error.message));
