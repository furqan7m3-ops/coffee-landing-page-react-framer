// First, import the images
import CappuccinoImg from "../../assets/Cappuccino.png";
import ChaiLatteImg from "../../assets/Latte.png";
import MacciatoImg from "../../assets/Macchiato.png";
import ExpressoImg from "../../assets/Expresso.png";

export default [
  {
    id: 0,
    flavorName: "Cappuccino",
    price: 3.99,
    ratio: { coffee: 50, milk: 50 },
    img: { src: CappuccinoImg, alt: "Cappuccino coffee" }
  },
  {
    id: 1,
    flavorName: "Chai Latte",
    price: 3.49,
    ratio: { coffee: 50, milk: 50 },
    img: { src: ChaiLatteImg, alt: "Chai latte coffee" }
  },
  {
    id: 2,
    flavorName: "Macciato",
    price: 4.29,
    ratio: { coffee: 70, milk: 30 },
    img: { src: MacciatoImg, alt: "Macchiato coffee" }
  },
  {
    id: 3,
    flavorName: "Expresso",
    price: 2.99,
    ratio: { coffee: 100, milk: 0 },
    img: { src: ExpressoImg, alt: "Espresso coffee" }
  }
];