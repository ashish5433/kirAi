import { Raleway } from "next/font/google";
import Image from "next/image";
import React from "react";
import { useState } from "react";

// const play = Raleway({
//   weight: ["400"],
//   style: ["normal"],
//   subsets: ["latin"],
// });

const specifications = ["200HP |", " 2019 |", " 44km/l", " Electric"]

const ProductCardContent = ({ data, view }) => {
  const [showBuy, setShowBuy] = useState(false);
  const [fillHeart, setFillHeart] = useState("#FFFFFF");

  return (
    <div>
      <div className={view ? "product-wrapper-col" : "product-wrapper-row"}>
        <div className="product-cards">
          <Image style={{ width: "300px", height: "200px" }}
            onMouseLeave={() => {
              setShowBuy(false);
            }}
            onMouseEnter={() => {
              setShowBuy(true);
            }}
            className="product--image hover:rounded-xl"
            src={data.image}
            width={300}
            height={200}
          />
        </div>
        <div style={{ width: "300px", height: "100px" }} >
          <div onMouseEnter={() => { setShowBuy(true) }} className="flex flex-row">
            {view ? <div className="flex">
              <div className="mx-4 -mt-14 rounded-sm brand-name bg-slate-300 px-2 py-2">
                Brand
              </div>
              {showBuy ? (
                <div className="-mt-10 px-3 -ml-4  rounded-md sticky product-buynow text-neutral-50 text-xs pointer">
                  Buy Now
                </div>
              ) : (
                ""
              )}
            </div> : ""
            }

            <div className="flex justify-end ml-12 -mt-10 mb-8 absolute pointer">
              <svg style={{ marginLeft: "220px" }}
                onClick={() => {
                  fillHeart === "#FFFFFF" ? setFillHeart("#FF1694") : setFillHeart("#FFFFFF")
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
          <div className={view===true ? "product-details-div-row" : "product-details-div-col"}>
            <div className="text-slate-900">
              <h6 className="px-2 text-xs font-bold">
                {
                  specifications.map((item) => {
                    return item
                  })
                }
              </h6>
            </div>
            <div className="product-details-inner">

              <div className="flex flex-col  text-neutral-900">

                <div className="">
                  <h6 className="px-2 text-xs">Product Brand</h6>
                </div>
                <div className=" px-2 -mt-3">
                  <span className="text-xl font-semibold space-x-0">Product Name</span>
                </div>
                <div className=" px-2 text-indigo-900 -mt-2">
                  <span className="text-xs font-bold">Jonanthan Bikes</span>
                </div>
              </div>
              {/* <div className="product-company-icon bg-purple-700">

              </div> */}
              <div className="text-neutral-900 flex flex-col">
                <span style={{ fontSize: "10px", fontWeight: "800" }}>EUR USD INR</span>
                <span className="font-bold text-indigo-700">$500,000,000</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductCardContent;