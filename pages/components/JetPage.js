import { Unica_One, Quicksand, Bebas_Neue } from "next/font/google";
import ProductCard from "./ProductCards";

const play = Bebas_Neue({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function JetPage() {
  const jet = [
    {
      name: "yacht1",
      price: 1289298,
      image: "/real_estate.jpg",
    },
    {
      name: "yacht1",
      price: 1289298,
      image: "/in_estate.jpg",
    },
    {
      name: "yacht1",
      price: 1289298,
      image: "/card_1.jpg",
    },
    {
      name: "yacht1",
      price: 1289298,
      image: "/card_2.jpg",
    },
    {
      name: "yacht1",
      price: 1289298,
      image: "/card_3.jpg",
    },
    {
      name: "yacht1",
      price: 1289298,
      image: "/card_4.jpg",
    },
    {
      name: "yacht1",
      price: 1289298,
      image: "/small-image-1.jpg",
    },
    {
      name: "yacht1",
      price: 1289298,
      image: "/real_estate.jpg",
    },
    {
      name: "yacht1",
      price: 1289298,
      image: "/in_estate.jpg",
    },
    {
      name: "yacht1",
      price: 1289298,
      image: "/card_1.jpg",
    },
    {
      name: "yacht1",
      price: 1289298,
      image: "/card_2.jpg",
    },
  ];

  return (
    <div className="menu-titles new-trending-title">
      <h1 className={play.className}>Jets</h1>
      <hr className="hr_rule" />
      <div>
        <ProductCard products={jet} />
      </div>
    </div>
  );
}
