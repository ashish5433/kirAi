import { Unica_One, Quicksand, Bebas_Neue, Raleway } from "next/font/google";
import Image from "next/image";

const play = Raleway({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function ProductCard({products}) {
  return (
    <div className="products-outer-div">
      <div className="product-card-div">
        {products?.map((data) => (
          <div className="product-wrapper">
            <div className="product-cards">
              <Image
                className="product--image"
                src={data.image}
                width={1920}
                height={1080}
              />
            </div>
            <div className="product-details-div">
              <div>
                <div className="product-details">
                  <p className="product-name">{data.name}</p>
                </div>
                <hr className="product-details-hrule"/>
                <div className="product-details">
                  <span>&#8377;</span>
                  <span className="product-price">{data.price}</span>
                </div>
              </div>
              <div className="product-company-icon">
                <Image
                  className="product--icon"
                  src={data.icon}
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
