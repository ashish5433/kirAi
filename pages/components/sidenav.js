import { useEffect } from "react";
export default function Sidenav({width}){
    useEffect(() => {
        document.getElementsByClassName("mt-18")[0].style.width=width
      });
    return(
        <div>
            <div className="flex flex-col  overflow-hidden  bg-black text-white absolute mt-18">
                <div className="text-center hover:bg-semi-white pointer flex p-2">
                    <span className="material-symbols-outlined  mr-3">directions_boat</span>
                    <p className="text-sm m-auto">Yacht</p>
                </div>
                <div    className="text-center hover:bg-semi-white pointer flex p-2">
                <span class="material-symbols-outlined mr-3">villa</span>
                    <p className="text-sm m-auto">Real Estates</p>
                </div>
                <div    className="text-center hover:bg-semi-white pointer flex p-2">
                <span class="material-symbols-outlined mr-3">helicopter</span>
                    <p className="text-sm m-auto">Helicopter</p>
                </div>
                <div    className="text-center hover:bg-semi-white pointer flex p-2">
                <span class="material-symbols-outlined mr-3">flight_takeoff</span>
                    <p className="text-sm m-auto">Jets</p>
                </div>
                <div    className="text-center hover:bg-semi-white pointer flex p-2">
                <span class="material-symbols-outlined mr-3">two_wheeler</span>
                    <p className="text-sm m-auto">Bikes</p>
                </div>
                <div    className="text-center hover:bg-semi-white pointer flex p-2">
                <span class="material-symbols-outlined mr-3">directions_car</span>
                    <p className="text-sm m-auto">Cars</p>
                </div>
            </div>
        </div>
    );
}