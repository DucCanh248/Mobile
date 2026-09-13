function getEvenNumbers(arr: number[]): Promise<number[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const evens = arr.filter((n) => n % 2 === 0);
      resolve(evens);
    }, 1000);
  });
}

getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]).then((result) => {
  console.log("Số chẵn:", result);
});
