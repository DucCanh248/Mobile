function riskyTask(shouldFail: boolean): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Thất bại!"));
      } else {
        resolve("Thành công!");
      }
    }, 1000);
  });
}

riskyTask(true)
  .then((result) => console.log(result))
  .catch((err) => console.log("Lỗi:", err.message))
  .finally(() => console.log("Done"));
