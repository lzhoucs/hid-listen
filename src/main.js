import HID from "node-hid";
import log from "./logger";

// const HID = require('node-hid');
const devices = HID.devices();

const hidDevice = devices.find(({usage}) => usage === 116)

if (hidDevice) {
  log(`Detect HID device: ${hidDevice.manufacturer} - ${hidDevice.product}, productId: ${hidDevice.productId}, vendorId: ${hidDevice.vendorId}`)

  const hid1 = new HID.HID(hidDevice.path)

  hid1.on("data", data => log(data.toString()))

} else {
  console.warn("No HID device found")
}
