import { Unica_One, Quicksand, Bebas_Neue } from "next/font/google";
import CategoryCard from "./CategoryCards";

const play = Bebas_Neue({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function CarPage() {
  const cars = [
    {
      name: "coupe",
      image: "/car1.png",
    },
    {
      name: "hyper cars",
      image: "/car3.png",
    },
    {
      name: "super cars",
      image: "/car2.png",
    },
    {
      name: "vintage cars",
      image: "/car4.png",
    },
    {
      name: "sedan",
      image: "/car1.png",
    },
    {
      name: "suv",
      image: "/car3.png",
    },
    {
      name: "hatchback",
      image: "/car2.png",
    },
    {
      name: "convertible",
      image: "/car4.png",
    },
  ];

  return (
    <div className="menu-titles new-trending-title">
      <h1 className={play.className}>Cars</h1>
      <hr className="hr_rule" />
      <div>
        <CategoryCard products={cars} />
      </div>
    </div>
  );
}
