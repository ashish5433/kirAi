import { Unica_One, Quicksand, Bebas_Neue } from "next/font/google";
import CategoryCard from "./CategoryCards";

const play = Bebas_Neue({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function BikePage() {
  const bikes = [
    {
      name: "superbike",
      image: "/bike3.png",
    },
    {
      name: "naked",
      image: "/bike2.png",
    },
    {
      name: "electric",
      image: "/bike1.png",
    },
    {
      name: "cruiser",
      image: "/bike3.png",
    },
    {
      name: "touring & adventure",
      image: "/bike2.png",
    },
    {
      name: "dual sport",
      image: "/bike1.png",
    },
    {
      name: "cafe racer",
      image: "/bike3.png",
    },
    {
      name: "retro & classic",
      image: "/bike2.png",
    },
  ];

  return (
    <div className="menu-titles new-trending-title">
      <h1 className={play.className}>Bikes</h1>
      <hr className="hr_rule" />
      <div>
        <CategoryCard products={bikes} />
      </div>
    </div>
  );
}
