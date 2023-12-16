import { SampleProductImage } from "./assets";
import { I_Product } from "../typescript/interfaces";
export const sampleProduct: I_Product = {
  ratingsAverage: 2.5,
  ratingsNumber: 2000,
  price: 400,
  colors: ["red", "green", "blue"],
  name: "Nike sweater and cap",
  sizes: ["xl", "l", "s", "m"],
  category: "clothes",
  discountedPrice: 200,
  imgUrl: SampleProductImage,
  shortDescription: "A cool cap and sweater for the summer",
  slug: "nike-sweater-and-cap",
  brand: "LG",
  model: "OELDAHDHDHG2",
  description:
    "Versatile connectivity: With a 3.5mm audio interface, this dock offers seamless connectivity for audio devices in addition to other peripherals\nPowerful Charging: Equipped with a 120W power adapter, this dock can provide up to 65W of power supply for charging your laptop, allowing you to work uninterrupted\n ITSPWR Type-C 4-Port Hub Stylish and durable: The Hub features an attractive and durable matte gray exterior. It is designed with one USB-A 3.0 port and three USB-A 2.0 ports, offering high-speed data transfer of up to 390MB per second and fast charging capabilities. Each port is equipped with independent chip technology, ensuring stable and smooth performance even when multiple devices are connected simultaneously.\nPlug-and-play compatibility: The hub is built with a driver-free chip, making it compatible with PC, Mac, and Linux systems without the need for additional software installation. It has obtained CE and ROHS certifications, guaranteeing its quality and adherence to safety standards.\nITSPWR Cable Ties: These magic tape cable ties are perfect for organizing and managing your cables and accessories.\n\n\n",
  quantityLeft: 20,
  isAddedToCart: false,
  quantityInCart: 0,
};
