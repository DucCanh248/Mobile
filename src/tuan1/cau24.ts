abstract class Appliance {
  abstract turnOn(): void;

  turnOff(): void {
    console.log("Tắt thiết bị");
  }
}

class Fan extends Appliance {
  turnOn(): void {
    console.log("Quạt đang chạy");
  }
}

class AirConditioner extends Appliance {
  turnOn(): void {
    console.log("Máy lạnh đang làm mát");
  }
}

const fan = new Fan();
const ac = new AirConditioner();
fan.turnOn();
ac.turnOn();
ac.turnOff(); // method dùng chung từ lớp cha