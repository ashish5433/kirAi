import { Unica_One, Quicksand, Bebas_Neue, Raleway } from "next/font/google";
import Image from "next/image";

const play = Raleway({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function ProductCard({products}) {
  return (
    <div>
      <div className="product-card-div">
    {products?.map((data)=>
      <div className="product-wrapper">
        <div className="product-cards">
          <Image
            className="product--image"
            src={data.image}
            width={1920}
            height={1080}
          />
        </div>
        <div className={play.className}>
          <div className="product-details">
            <p className="product-name">{data.name}</p>
          </div>
          <div className="product-details">
            <span>&#8377;</span>
            <span className="product-price">{data.price}</span>
          </div>
        </div>
      </div>
      )}
      </div>
    </div>
  );
}
