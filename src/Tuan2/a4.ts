function getRandomNumber(): Promise<number> {
  return new Promise((resolve, reject) => {
    const num = Math.random();
    if (num < 0.5) {
      reject(new Error("Số quá nhỏ, thử lại!"));
    } else {
      resolve(Math.floor(num * 100));
    }
  });
}

getRandomNumber()
  .then((num) => console.log("Số ngẫu nhiên:", num))
  .catch((err) => console.log("Lỗi:", err.message));
