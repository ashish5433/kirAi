import React from "react";

export default function Explorer() {
  return (
    <div>
      <div className="w-full h-full flex justify-center bg-white">
        <div className="bg-indigo-800 w-[60%] h-3/6 p-10 rounded-xl m-14 flex flex-col">
          <div className="text-neutral-50 flex flex-col">
            <span className="font-semibold text-3xl mb-1 ">
              Create your account and Start Selling
            </span>
            <span>
              Get Connected to Affluent Clients across the world.{" "}
              <span className="text-orange-500 font-bold">
                Fast Secure and Verified
              </span>
            </span>
          </div>
          <div className="flex w-full flex-row mt-5">
            <div className="flex flex-col w-[50%] ml-10">
              <div className="flex flex-col text-neutral-300">
                <label className="pl-3 mb-1">Legal Name of Business</label>
                <input
                  type="text"
                  placeholder="Raunak Biswas"
                  className="w-3/6 h-10 p-2 rounded-full"
                ></input>
              </div>
              <div className="flex flex-col text-neutral-300">
                <label className="pl-3 mb-1">Business Address</label>
                <input
                  type="text"
                  placeholder="UAE, Dubai"
                  className="w-3/6 h-10 p-2 rounded-full"
                ></input>
              </div>
              <div className="flex flex-col text-neutral-300">
                <label className="pl-3 mb-1">Business Category</label>
                <input
                  type="text"
                  placeholder="Dealer"
                  className="w-3/6 h-10 p-2 rounded-full"
                ></input>
              </div>
              <div className="flex flex-col text-neutral-300">
                <label className="pl-3 mb-1">
                  Company Identification Number
                </label>
                <input
                  type="text"
                  placeholder="xxxx-xxxx-xxxx-xxxx"
                  className="w-3/6 h-10 p-2 rounded-full"
                ></input>
              </div>
              <div className="flex flex-col text-neutral-300">
                <label className="pl-3 mb-1">Tax Identification Number</label>
                <input
                  type="text"
                  placeholder="xxx-xxx-xxxx"
                  className="w-3/6 h-10 p-2 rounded-full"
                ></input>
              </div>
            </div>
            <div className="flex flex-col -mt-5">
              <div>
                <h4 className="font -bold text-neutral-50">What you get</h4>
              </div>
              <div>
                <ul className="-ml-14">
                  <li className="flex ">
                    <span class="material-symbols-outlined p-1 text-neutral-50">
                      album
                    </span>
                    <span className="text-lg text-neutral-300">Recieve Quick Enquiries</span>
                  </li>

                  <li className="flex ">
                    <span class="material-symbols-outlined p-1 text-neutral-50">
                      album
                    </span>
                    <span className="text-lg text-neutral-300">Sell any Products and Services in seconds</span>
                  </li>

                  <li className="flex ">
                    <span class="material-symbols-outlined p-1 text-neutral-50">
                      album
                    </span>
                    <span className="text-lg text-neutral-300">Repair and Maintenance</span>
                  </li>

                  <li className="flex ">
                    <span class="material-symbols-outlined p-1 text-neutral-50">
                      album
                    </span>
                    <span className="text-lg text-neutral-300">Connect and Collaborate with Businesses</span>
                  </li>

                  <li className="flex ">
                    <span class="material-symbols-outlined p-1 text-neutral-50">
                      album
                    </span>
                    <span className="text-lg text-neutral-300">Unlimited Categories</span>
                  </li>

                  <li className="flex ">
                    <span class="material-symbols-outlined p-1 text-neutral-50">
                      album
                    </span>
                    <span className="text-lg text-neutral-300">Worldwide Listing</span>
                  </li>

                  <li className="flex ">
                    <span class="material-symbols-outlined p-1 text-neutral-50">
                      album
                    </span>
                    <span className="text-lg text-neutral-300">Raise a Request and Hire a Professional</span>
                  </li>

                  <li className="flex ">
                    <span class="material-symbols-outlined p-1 text-neutral-50">
                      album
                    </span>
                    <span className="text-lg text-neutral-300">Earn from Shaukeens</span>
                  </li>
                </ul>
                <button className="w-96 h-12 rounded-full bg-orange-500 text-neutral-100 font-bold text-lg">Submit Request</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
