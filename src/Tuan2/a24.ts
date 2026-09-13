async function postData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "Bài tập Async",
      body: "Nội dung bài viết",
      userId: 1,
    }),
  });

  const result = await response.json();
  console.log("Kết quả trả về:", result);
}

postData();
