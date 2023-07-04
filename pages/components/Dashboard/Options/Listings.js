import React from "react";
import Listingcard from "./listingcard";

export default function Listings() {
  const listnum = [1, 2, 3, 4];
  return (
    <div>
      <div>
        <div className="bg-white scrollhide overflow-y-scroll h-[41vw]">
          <div className="m-2">
            <div className="bg-violet-100 w-full -ml-6 -mt-10 h-20 relaive fixed border-b-8 border-white"></div>
            <div className="fixed rounded-md">
              <span className="flex -mt-10  p-2 justify-start gap-2">
                <div className="px-8 border-4 border-violet-700 bg-white py-2 rounded-full">
                  <a
                    className="text-neutral-800 decoration_none"
                    href="#Activelisting"
                  >
                    Active Listings
                  </a>
                </div>
                <div className="px-8 border-4 border-violet-700 bg-white py-2 rounded-full">
                  <a
                    className="text-neutral-800 decoration_none"
                    href="#Inactivelisting"
                  >
                    In-Active Listings
                  </a>
                </div>
                <div className="px-8 border-4 border-violet-700 bg-white py-2 rounded-full">
                  <a
                    className="text-neutral-800 decoration_none"
                    href="#Archive"
                  >
                    Archive
                  </a>
                </div>
                <div className="px-8 border-4 border-violet-700 bg-white py-2 rounded-full">
                  <a className="text-neutral-800 decoration_none" href="#Draft">
                    Draft
                  </a>
                </div>
              </span>
            </div>
          </div>

          <div className="pt-10" id="Activelisting">
            <h5 className="">Active Listings</h5>
            <hr />
            <div className="flex gap-1 flex-wrap">
              {listnum.map(() => {
                return <Listingcard />;
              })}
            </div>
          </div>

          <div className="pt-10" id="Inactivelisting">
            <h5 className="">In-Active Listings</h5>
            <hr />
            <div className="flex gap-1 flex-wrap">
              {listnum.map(() => {
                return <Listingcard />;
              })}
            </div>
          </div>

          <div className="pt-10" id="Archive">
            <h5 className="">Archive</h5>
            <hr />
            <div className="flex gap-1 flex-wrap">
              {listnum.map(() => {
                return <Listingcard />;
              })}
            </div>
          </div>

          <div className="pt-10" id="Draft">
            <h5 className="">Draft</h5>
            <hr />
            <div className="flex gap-1 flex-wrap">
              {listnum.map(() => {
                return <Listingcard />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
