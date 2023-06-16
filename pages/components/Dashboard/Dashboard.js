import React from 'react'
import Navdash from './Navdash'
import dashboard from "./dashboard.module.css"
import Image from 'next/image';

setTimeout(() => {
  google.charts.load('current', { 'packages': ['corechart'] });
  google.charts.setOnLoadCallback(drawChart);
}, 2000)


// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Item 1', 5],
    ['Item 2', 6],
    ['Item 3', 4],
    ['Item 4', 3],
    ['Item 5', 7]
  ]);

  // Optional; add a title and set the width and height of the chart
  var options = {
    'width': 450, 'height': 450,
    legend: 'none',
    // is3D: true, 
    slices: {
      0: { color: "#0891b2" },
      1: { color: "#0e7490" },
      2: { color: "#155e75" },
      3: { color: "#164e63" },
      4: { color: "#083344" }
    }
  };

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}

export default function Dashboard() {
  const countries = [["Russia", "ru"], ["Canada", "ca"], ["China", "cn"], ["United States", "us"], ["Brazil", "br"], ["Australia", "au"], ["India", "in"], ["Argentina", "ar"], ["Kazakhstan", "kz"], ["Algeria", "dz"]];
  const users_reached = [300, 342, 456, 532, 246, 778, 332, 124, 890, 900]
  return (
    <div>
      <Navdash />
      <div>
        <div className='grid grid-cols-12  border-t-2'>
          <div className='col-span-2 bg-black pt-4 flex flex-col px-1'>
            <div className='flex flex-row bg-violet-300 rounded-full m-2 pointer  py-1'>
              <span class="material-symbols-outlined  border-4 mt-1 ml-10  h-14 w-14 rounded-full border-violet-800 bg-black text-neutral-50">
                home
              </span>
              <span className='my-1 mx-3 px-4 py-2 rounded-xl text-xl bg-slate-200' >Home</span>
            </div>
            <div className='flex flex-row bg-violet-300 rounded-full m-2 pointer   py-1'>
              <span class="material-symbols-outlined border-4 mt-1 ml-10 h-14 w-14 rounded-full border-violet-800 bg-black text-neutral-50">
              deployed_code_history
              </span>
              <span className='my-1 mx-3 px-4 rounded-xl text-xl bg-slate-200' >Upgrade Packages</span>
            </div>
            <div className='flex flex-row bg-violet-300 rounded-full m-2 pointer   py-1'>
              <span class="material-symbols-outlined border-4 mt-1 ml-10  h-14 w-14 rounded-full border-violet-800 bg-black text-neutral-50">
                list_alt_add
              </span>
              <span className='my-1 mx-3 px-3 rounded-xl text-xl bg-slate-200' >Add/Delete Listings</span>
            </div>
            <div className='flex flex-row bg-violet-300 rounded-full pointer  m-2 py-1'>
              <span class="material-symbols-outlined border-4 mt-1 ml-10  h-14 w-14 rounded-full border-violet-800 bg-black text-neutral-50">
                edit_document
              </span>
              <span className='my-1 mx-3 px-4 rounded-xl text-xl bg-slate-200' >Edit Listings</span>
            </div>
            <div className='flex flex-row bg-violet-300 rounded-full m-2 pointer   py-1'>
              <span class="material-symbols-outlined border-4 mt-1 ml-10  h-14 w-14 rounded-full border-violet-800 bg-black text-neutral-50">
                link
              </span>
              <span className='my-1 mx-3 px-4 rounded-xl text-xl bg-slate-200' >Product Link</span>
            </div>
            <div className='flex flex-row bg-violet-300 rounded-full m-2 pointer   py-1'>
              <span class="material-symbols-outlined border-4 mt-1 ml-10  h-14 w-14 rounded-full border-violet-800 bg-black text-neutral-50">
                redeem
              </span>
              <span className='my-1 mx-3 px-4 rounded-xl text-xl bg-slate-200' >Allow Affiliate</span>
            </div>
          </div>


          <div className='m-3 col-span-7'>

            <div className='bg-neutral-100 p-3'>
              <h4>Listing Details</h4>
              <div className='grid grid-cols-4 gap-2 mt-3'>
                <div className='cols-start-1 col-end-2 border-2 border-violet-700 rounded-lg h-24 flex flex-col px-3 text-lg'>
                  <span >Overall Listings</span>
                  <span className='text-4xl mt-3 font-semibold flex'>
                    <span>235</span>
                    <span style={{ color: "purple", scale: "1.4", marginLeft: "90px" }} className="material-symbols-outlined">
                      forum
                    </span>
                  </span>
                </div>
                <div className='cols-start-2 col-end-3 border-2 border-violet-700 rounded-lg flex flex-col h-24 px-3 text-lg'>
                  <span>Total Photos</span>
                  <span className='text-4xl mt-3 font-semibold'>23500</span>
                </div>
                <div className='cols-start-3 col-end-4 border-2 border-violet-700 rounded-lg flex flex-col h-24 px-3 text-lg'>
                  <span >Total Videos</span>
                  <span className='text-4xl mt-3 font-semibold'>500</span>
                </div>
                <div className='cols-start-4 col-end-5 border-2 border-violet-700 rounded-lg flex flex-col h-24 px-3 text-lg'>
                  <span>Product Sold</span>
                  <span className='text-4xl mt-3 font-semibold'>180</span>
                </div>
              </div>
            </div>


            <div className='bg-neutral-100 p-3 mt-3'>
              <h4>Enquiries</h4>
              <div className='grid grid-cols-3 gap-4 mt-3'>
                <div className='cols-start-1 col-end-2 border-2 border-violet-700 rounded-lg h-24 flex flex-col px-3 text-lg'>
                  <span >Total Enquiries Recieved</span>
                  <span className='text-4xl mt-3 font-semibold'>23500</span>
                </div>
                <div className='cols-start-2 col-end-3 border-2 border-violet-700 rounded-lg flex flex-col h-24 px-3 text-lg'>
                  <span>Total Answered Enquiries</span>
                  <span className='text-4xl mt-3 font-semibold'>500</span>
                </div>
                <div className='cols-start-3 col-end-4 border-2 border-violet-700 rounded-lg flex flex-col h-24 px-3 text-lg'>
                  <span >Total Unanswered Enquiries</span>
                  <span className='text-4xl mt-3 font-semibold'>23000</span>
                </div>
              </div>
              <div className='grid grid-cols-4 gap-2 mt-3'>
                <div className='cols-start-1 col-end-2 border-2 border-violet-700 rounded-lg h-24 flex flex-col px-3 text-lg'>
                  <span >Total Live View Request</span>
                  <span className='text-4xl mt-3 font-semibold'>
                    <span>23200</span>
                    <span style={{ color: "red", scale: "1.6", marginLeft: "30px" }} className="material-symbols-outlined">
                      sensors
                    </span>
                  </span>
                </div>
                <div className='cols-start-2 col-end-3 border-2 border-violet-700 rounded-lg flex flex-col h-24 px-3 text-lg'>
                  <span>Total Visit Request</span>
                  <span className='text-4xl mt-3 font-semibold'>
                    <span>200</span>
                    <span style={{ color: "indigo", scale: "1.6", marginLeft: "70px" }} className="material-symbols-outlined">
                      distance
                    </span>
                  </span>
                </div>
                <div className='cols-start-3 col-end-4 border-2 border-violet-700 rounded-lg flex flex-col h-24 px-3 text-lg'>
                  <span >Total Calls Recieved</span>
                  <span className='text-4xl mt-3 font-semibold'>
                    <span>500</span>
                    <span style={{ color: "indigo", scale: "1.5", marginLeft: "70px" }} class="material-symbols-outlined">
                      phone_in_talk
                    </span>
                  </span>
                </div>
                <div className='cols-start-4 col-end-5 border-2 border-violet-700 rounded-lg flex flex-col h-24 px-3 text-lg'>
                  <span>Total Chats Enquiries</span>
                  <span className='text-4xl mt-3 font-semibold'>
                    <span>230</span>
                    <span style={{ color: "purple", scale: "1.4", marginLeft: "70px" }} className="material-symbols-outlined">
                      forum
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className='bg-neutral-100 p-3 mt-3'>
              <h4>Listing Details</h4>
              <div className='grid grid-cols-4 gris-rows-auto gap-2 mt-3'>
                <div className='cols-start-1 col-end-2 border-2 border-violet-700 rounded-lg h-24 flex flex-col px-3 text-lg'>
                  <span >Total Views</span>
                  <span className='text-4xl mt-3 font-semibold'>
                    <span>235</span>
                    <span style={{ color: "purple", scale: "1.4", marginLeft: "70px" }} className="material-symbols-outlined">
                      forum
                    </span>
                  </span>
                </div>
                <div className='cols-start-2 col-end-3 border-2 border-violet-700 rounded-lg flex flex-col h-24 px-3 text-lg'>
                  <span>Total Clicks Recieved</span>
                  <span className='text-4xl mt-3 font-semibold'>23500</span>
                </div>
                <div className='cols-start-3 col-end-4 border-2 border-violet-700 rounded-lg flex flex-col h-24 px-3 text-lg'>
                  <span >Total Views Recieved</span>
                  <span className='text-4xl mt-3 font-semibold'>500</span>
                </div>
                <div className='cols-start-4 col-end-5 border-2 border-violet-700 rounded-lg flex flex-col h-24 px-3 text-lg'>
                  <span>Total Add to Wishlist</span>
                  <span className='text-4xl mt-3 font-semibold'>180</span>
                </div>
                <div className='cols-start-1 col-end-2 border-2 border-violet-700 rounded-lg flex flex-col h-24 mt-2 px-3 text-lg'>
                  <span>Overall Reviews</span>
                  <span className='text-4xl mt-3 font-semibold'>180</span>
                </div>
              </div>
            </div>
          </div>




          <div className='col-span-3'>
            <div className='flex flex-col'>
              <div style={{ backgroundColor: "#00000015" }} className=' w-full p-2 mt-3'><h4 className='text-center '>Demograph</h4></div>
              <div className='-ml-3' id="piechart"></div>
              <div className='p-2 '>
                <div className='grid grid-cols-2'>
                  <div className='cols-start-1 col-end-2 bg-neutral-100'>
                    <h5 className='mb-4 text-center mt-3'>Countries</h5>
                    <hr />
                    {
                      countries.map((country) => {
                        return <span className='flex space-x-3 my-2 ml-5'><span><Image className='bg-black p-2 rounded-xl' width={48} height={48} src={`https://flagcdn.com/48x36/${country[1]}.png`} alt="..." /></span><span className='font-semibold mt-2'>{country[0]}</span></span>
                      })
                    }
                  </div>
                  <div className='cols-start-2 col-end-3 bg-neutral-100 '>
                    <h5 className='mb-4 text-center mt-3'>Users Reached</h5>
                    <hr />
                    {
                      users_reached.map((users) => {
                        return <span className='flex space-x-3 my-3 ml-10'><span className='font-semibold mt-2'>{users}</span></span>
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
