import React from 'react'
import { Unica_One, Quicksand, Bebas_Neue } from "next/font/google";
import { Button } from 'react-bootstrap';
import dashboard from "./dashboard.module.css";

const play = Bebas_Neue({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function Navdash() {

  return (
    <div>
      <div className='bg-black h-14 flex flex-row w-full'>
          
        <div className='flex justify-start  text-white p-2 '>
          <span style={{ scale: "1.5", marginTop: "-5px" }} className="material-symbols-outlined mx-3 pointer">
            sort
          </span>
          <h3 style={{ marginTop: "5px" }} className={play.className}>Shaukeens</h3>
        </div>

        <div className=' ml-40 p-2'>
          <div className="carousel-search">
            <input
              style={{ maxWidth: "600px", minWidth: "400px", fontSize: "10px", padding: "10px", textAlign: "left", borderRadius: "5px", backgroundColor: "white" }}
              type="text"
              className={play.className}
            />
            <button type="submit">
              <span
                style={{
                  padding: "7px",
                  paddingLeft: "13px",
                  paddingRight: "13px",
                  borderTopRightRadius: "5px",
                  borderBottomRightRadius: "5px",
                  position: "relative",
                  marginLeft: "-80px",
                  backgroundColor: "gray",
                  color: "black",
                  fontSize: "16px"
                }}
              >
                Search
              </span>
            </button>
          </div>
        </div>

        <div className={`flex justify-end ${dashboard.items_end}`}>
          <div>
            <button className={`mx-1 my-2 p-2 ${dashboard.dashboard_navbutton_first}`}> + Add a Listing</button>
          </div>
          <div>  <button className={`mx-1 my-2 p-2 ${dashboard.dashboard_navbutton}`}> + Create a Request</button>
            </div>
            <div>
            <button className={`mx-1 my-2 p-2 ${dashboard.dashboard_navbutton}`}> + Hire a Professional</button>
            </div>
        </div>

      </div>
    </div>
  )
}
