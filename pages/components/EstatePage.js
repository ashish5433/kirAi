import { Unica_One, Quicksand, Bebas_Neue } from "next/font/google";
import CategoryCard from "./CategoryCards";

const play = Bebas_Neue({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function EstatePage() {
  const estate = [
    {
      name: "villas",
      image: "/estate6.png",
    },
    {
      name: "private islands",
      image: "/estate5.png",
    },
    {
      name: "castle",
      image: "/estate4.png",
    },
    {
      name: "land",
      image: "/estate3.png",
    },
    {
      name: "beachside properties",
      image: "/estate6.png",
    },
  ];

  return (
    <div className="menu-titles new-trending-title">
      <h1 className={play.className}>Estates</h1>
      <hr className="hr_rule" />
      <div>
        <CategoryCard products={estate} />
      </div>
    </div>
  );
}
