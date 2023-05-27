import { Unica_One, Quicksand, Bebas_Neue, Raleway } from "next/font/google";
import Image from "next/image";
import React from "react";
import { useState } from "react";

const play = Raleway({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const ProductCardContent = ({data}) =>{
    const [showBuy, setShowBuy] = useState(false);
    const [fillHeart,setFillHeart] = useState("#FFFFFF");

    return(
        <div>
            <div className="product-wrapper">
            <div  className="product-cards">
              <Image style={{width:"300px", height:"200px"}} 
                onMouseLeave={() => {
                  setShowBuy(false);
                }}
                onMouseEnter={() => {
                  setShowBuy(true);
                }}
                className="product--image"
                src={data.image}
                width={300}
                height={200}
              />
            </div>
            <div style={{width:"300px", height:"200px"}} >
            <div className="flex flex-row">
              {showBuy ? (
                <div className="flex justify-start mx-4 -mt-8">
                  <div onMouseEnter={() => {setShowBuy(true)}} className="product-buynow px-3 rounded-full text-neutral-50 text-sm pointer">
                    Buy Now
                  </div>
                  <div onMouseEnter={() => {setShowBuy(true)}} className="product-buynow px-3 rounded-full text-neutral-50 text-sm mx-2 pointer">
                    More Details
                  </div>
                </div>
              ) : (
                ""
              )}
              <div className="flex justify-end ml-8 -mt-10 mb-8 absolute pointer">
                <svg style={{marginLeft:"220px"}}
                    onClick={()=>{
                        fillHeart==="#FFFFFF" ? setFillHeart("#FF1694") : setFillHeart("#FFFFFF")
                    }}
                    onMouseEnter={() => {
                        setShowBuy(true);
                    }}
                    
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill={fillHeart}
                  class="bi bi-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  />
                </svg>
              </div>
            </div>
            <div className="product-details-div">
              <div>
                <div className="product-details px-3">
                  <p className="product-name text-xs p-2">Name</p>
                </div>
                <hr className="product-details-hrule" />
                <div className="flex flex-row">
                  <div className="product-div-price px-2 mx-1">
                    <span>&#8377;</span>
                    <span className="product-price">10,20,56,778</span>
                  </div>
                  <div className="product-div-price px-2">
                    <span className="product-price">More</span>
                  </div>
                </div>
              </div>
              <div className="product-company-icon bg-purple-700">
                {/* <Image
                  className="product--icon"
                  src={data.icon}
                  width={100}
                  height={60}
                /> */}
              </div>
            </div>
          </div>
          </div>
        </div>
    );
}

export default ProductCardContent;