function downloadFile(fileName: string): Promise<void> {
  return new Promise((resolve) => {
    console.log(`Bắt đầu tải ${fileName}...`);
    setTimeout(() => {
      console.log(`Đã tải xong ${fileName}`);
      resolve();
    }, 3000);
  });
}

async function run() {
  await downloadFile("baitap.pdf");
  console.log("Có thể mở file ngay bây giờ");
}

run();
