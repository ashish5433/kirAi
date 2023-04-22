import { Unica_One, Quicksand, Bebas_Neue, Raleway } from "next/font/google";

const play = Raleway({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function ProductCard() {
  return (
    <div>
      <div className="product-card-div">
        <div className="product-wrapper">
          <div className="product-cards product-card-comp-1"></div>
          <div className={play.className}>
            <div className="product-details">
              <p className="product-name">Product Name</p>
            </div>
            <div className="product-details">
              <span>&#8377;</span>
              <span className="product-price">1,945,654,231</span>
            </div>
          </div>
        </div>
        <div className="product-wrapper">
          <div className="product-cards product-card-comp-2"></div>
          <div className={play.className}>
            <div className="product-details">
              <p className="product-name">Product Name</p>
            </div>
            <div className="product-details">
              <span>&#8377;</span>
              <span className="product-price">1,945,654,231</span>
            </div>
          </div>
        </div>
        <div className="product-wrapper">
          <div className="product-cards product-card-comp-3"></div>
          <div className={play.className}>
            <div className="product-details">
              <p className="product-name">Product Name</p>
            </div>
            <div className="product-details">
              <span>&#8377;</span>
              <span className="product-price">1,945,654,231</span>
            </div>
          </div>
        </div>
        <div className="product-wrapper">
          <div className="product-cards product-card-comp-4"></div>
          <div className={play.className}>
            <div className="product-details">
              <p className="product-name">Product Name</p>
            </div>
            <div className="product-details">
              <span>&#8377;</span>
              <span className="product-price">1,945,654,231</span>
            </div>
          </div>
        </div>
        <div className="product-wrapper">
          <div className="product-cards product-card-comp-5"></div>
          <div className={play.className}>
            <div className="product-details">
              <p className="product-name">Product Name</p>
            </div>
            <div className="product-details">
              <span>&#8377;</span>
              <span className="product-price">1,945,654,231</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
