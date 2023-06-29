import React from "react";

export default function Home() {
  return (
    <div>
        <div className="bg-neutral-100 p-3">
          <h4>Listing Details</h4>
          <div className="grid grid-cols-4 gap-2 mt-3">
            <div className="cols-start-1 col-end-2 border-2 border-violet-700 rounded-lg h-24 flex flex-col px-3 text-lg">
              <span>Overall Listings</span>
              <span className="text-4xl mt-3 font-semibold flex">
                <span>235</span>
                <span
                  style={{ color: "purple", scale: "1.4", marginLeft: "90px" }}
                  className="material-symbols-outlined"
                >
                  forum
                </span>
              </span>
            </div>
            <div className="cols-start-2 col-end-3 border-2 border-violet-700 rounded-lg flex flex-col h-24 px-3 text-lg">
              <span>Total Photos</span>
              <span className="text-4xl mt-3 font-semibold">23500</span>
            </div>
            <div className="cols-start-3 col-end-4 border-2 border-violet-700 rounded-lg flex flex-col h-24 px-3 text-lg">
              <span>Total Videos</span>
              <span className="text-4xl mt-3 font-semibold">500</span>
            </div>
            <div className="cols-start-4 col-end-5 border-2 border-violet-700 rounded-lg flex flex-col h-24 px-3 text-lg">
              <span>Product Sold</span>
              <span className="text-4xl mt-3 font-semibold">180</span>
            </div>
          </div>
        </div>

        <div className="bg-neutral-100 p-3 mt-3">
          <h4>Enquiries</h4>
          <div className="grid grid-cols-3 gap-4 mt-3">
            <div className="cols-start-1 col-end-2 border-2 border-violet-700 rounded-lg h-24 flex flex-col px-3 text-lg">
              <span>Total Enquiries Recieved</span>
              <span className="text-4xl mt-3 font-semibold">23500</span>
            </div>
            <div className="cols-start-2 col-end-3 border-2 border-violet-700 rounded-lg flex flex-col h-24 px-3 text-lg">
              <span>Total Answered Enquiries</span>
              <span className="text-4xl mt-3 font-semibold">500</span>
            </div>
            <div className="cols-start-3 col-end-4 border-2 border-violet-700 rounded-lg flex flex-col h-24 px-3 text-lg">
              <span>Total Unanswered Enquiries</span>
              <span className="text-4xl mt-3 font-semibold">23000</span>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 mt-3">
            <div className="cols-start-1 col-end-2 border-2 border-violet-700 rounded-lg h-24 flex flex-col px-3 text-lg">
              <span>Total Live View Request</span>
              <span className="text-4xl mt-3 font-semibold">
                <span>23200</span>
                <span
                  style={{ color: "red", scale: "1.6", marginLeft: "30px" }}
                  className="material-symbols-outlined"
                >
                  sensors
                </span>
              </span>
            </div>
            <div className="cols-start-2 col-end-3 border-2 border-violet-700 rounded-lg flex flex-col h-24 px-3 text-lg">
              <span>Total Visit Request</span>
              <span className="text-4xl mt-3 font-semibold">
                <span>200</span>
                <span
                  style={{ color: "indigo", scale: "1.6", marginLeft: "70px" }}
                  className="material-symbols-outlined"
                >
                  distance
                </span>
              </span>
            </div>
            <div className="cols-start-3 col-end-4 border-2 border-violet-700 rounded-lg flex flex-col h-24 px-3 text-lg">
              <span>Total Calls Recieved</span>
              <span className="text-4xl mt-3 font-semibold">
                <span>500</span>
                <span
                  style={{ color: "indigo", scale: "1.5", marginLeft: "70px" }}
                  class="material-symbols-outlined"
                >
                  phone_in_talk
                </span>
              </span>
            </div>
            <div className="cols-start-4 col-end-5 border-2 border-violet-700 rounded-lg flex flex-col h-24 px-3 text-lg">
              <span>Total Chats Enquiries</span>
              <span className="text-4xl mt-3 font-semibold">
                <span>230</span>
                <span
                  style={{ color: "purple", scale: "1.4", marginLeft: "70px" }}
                  className="material-symbols-outlined"
                >
                  forum
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="bg-neutral-100 p-3 mt-3">
          <h4>Listing Details</h4>
          <div className="grid grid-cols-4 gris-rows-auto gap-2 mt-3">
            <div className="cols-start-1 col-end-2 border-2 border-violet-700 rounded-lg h-24 flex flex-col px-3 text-lg">
              <span>Total Views</span>
              <span className="text-4xl mt-3 font-semibold">
                <span>235</span>
                <span
                  style={{ color: "purple", scale: "1.4", marginLeft: "70px" }}
                  className="material-symbols-outlined"
                >
                  forum
                </span>
              </span>
            </div>
            <div className="cols-start-2 col-end-3 border-2 border-violet-700 rounded-lg flex flex-col h-24 px-3 text-lg">
              <span>Total Clicks Recieved</span>
              <span className="text-4xl mt-3 font-semibold">23500</span>
            </div>
            <div className="cols-start-3 col-end-4 border-2 border-violet-700 rounded-lg flex flex-col h-24 px-3 text-lg">
              <span>Total Views Recieved</span>
              <span className="text-4xl mt-3 font-semibold">500</span>
            </div>
            <div className="cols-start-4 col-end-5 border-2 border-violet-700 rounded-lg flex flex-col h-24 px-3 text-lg">
              <span>Total Add to Wishlist</span>
              <span className="text-4xl mt-3 font-semibold">180</span>
            </div>
            <div className="cols-start-1 col-end-2 border-2 border-violet-700 rounded-lg flex flex-col h-24 mt-2 px-3 text-lg">
              <span>Overall Reviews</span>
              <span className="text-4xl mt-3 font-semibold">180</span>
            </div>
          </div>
        </div>
    </div>
  );
}
