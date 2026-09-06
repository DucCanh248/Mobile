class Logger {
  private static instance: Logger;

  private constructor() {} // constructor private -> không new() được từ bên ngoài

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
      console.log("Tạo Logger instance mới");
    }
    return Logger.instance;
  }

  log(message: string): void {
    console.log(`[LOG]: ${message}`);
  }
}

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.log("Bắt đầu chương trình");
logger2.log("Đây vẫn là cùng 1 instance");

console.log(logger1 === logger2); // true