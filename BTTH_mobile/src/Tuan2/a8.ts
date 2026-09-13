function square(num: number): Promise<number> {
  return new Promise((resolve) => resolve(num * num));
}

function double(num: number): Promise<number> {
  return new Promise((resolve) => resolve(num * 2));
}

function addFive(num: number): Promise<number> {
  return new Promise((resolve) => resolve(num + 5));
}

square(2)
  .then((result) => double(result))
  .then((result) => addFive(result))
  .then((result) => console.log("Kết quả cuối:", result));
