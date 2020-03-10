import HID from "node-hid";

// const HID = require('node-hid');
const devices = HID.devices();

const hidDevice = devices.find(({usage}) => usage === 116)

if (hidDevice) {
  console.log(`Detect HID device: ${hidDevice.product}, productId: ${hidDevice.productId}, vendorId: ${hidDevice.vendorId}`)

  const hid1 = new HID.HID(hidDevice.path)

  hid1.on("data", data => console.log('received', data))

} else {
  console.warn("No HID device found")
}
