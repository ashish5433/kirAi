import Datascroll from "./datascroll_sq";
import filter from "./filter.module.css"
import { Button } from "react-bootstrap";
import Datascroll_R from "./datascroll_cir";
import { useState } from "react";
import Image from "next/image";
import motorboat from "../../../images/motorboat.png";
import sailboat from "../../../images/sailboat.png";

export default function Filter() {

    const collapse=(stateVal,setValfunc,class_name_val)=>{
        if(stateVal==="160px"){
            setValfunc("0px");
            document.getElementsByClassName(class_name_val)[0].style.height=stateVal;
        }
        else{
            setValfunc("160px");
            document.getElementsByClassName(class_name_val)[0].style.height=stateVal;
        }
    }
    const [saleStatus,setSaleStatus] = useState("0px");
    const [yachtType,setYachtType] = useState("0px");
    const [length_filter,setLength] = useState("0px");
    const [builder,setBuilder] = useState("0px");
    const [year,setYear] = useState("0px");
    const [price,setPrice] = useState("0px");
    const [country,setCountry] = useState("0px");
    const [subtype,setSubtype] = useState("0px");
    const [volume,setVolume] = useState("0px");


    //sample data
    const list_length = ["24m-30m","30m+","40m+","60m+","100m+"];
    const list_builder = ["Nobiskrug","Amels","Lürssen","Feadship","Abeking & Rasmussen","Perini Navi","Heesen","Oceanco","Benetti","Westport","Azimut"];
    const list_year =["2022","2023","≥ 2021","≥ 2010","≥ 2000"];
    const list_price = ["≤ €1M","€1-2M","€2-5M","€5-10M","€10-15M","€0-15M","€15-25M","≥ €25M"];
    const list_country=["Germany","Italy","The Netherlands","Taiwan","Turkey","United States","China","Afghanistan","Albania","Algeria","American Samoa"];
    const list_subtype=["Conversion","Explorer","Flybridge","Gulet","J Class","Maxi","Motor Sailer","Sport Boat","Sport Fisherman","Support Yacht"];
    const list_volume=["300 GT-","300 GT+","500 GT-","500 GT+","1000 GT+","3000 GT+"];
    return (
        <>
        {collapse}
            <div className={`bg-white h-auto ${filter.filter_width} p-3`}>
                <div className="block ml-2 mt-20">
                    <h3 className="font-sans">Search</h3>
                    <div><input className={`${filter.btn_input}`} type="text" placeholder="Find yacht..." /></div>
                    <div><Button className={`${filter.btn_width}`}>Search</Button></div>
                </div>
                <hr />
                <div>
                    <h3>Filter by</h3>
                    <hr />
                    <div>
                        <div className="flex">
                            <h5>Sale Status</h5>
                            <span onClick={()=>collapse(saleStatus,setSaleStatus,"saleStatus")} class="material-symbols-outlined -mt-2 ml-auto pointer">
                                expand_more
                            </span>
                        </div>
                        <div className="overflow-y-auto saleStatus">
                        </div>
                        {saleStatus !== "160px" ? <Button className={`${filter.btn_width}`}>Apply</Button> :""}

                    </div>
                    <hr />
                    <div>
                    <div className="flex">
                            <h5>Yacht Type</h5>
                            <span onClick={()=>collapse(yachtType,setYachtType,"yachtType")} class="material-symbols-outlined -mt-2 ml-auto pointer">
                                expand_more
                            </span>
                        </div>
                        <div className="overflow-y-auto yachtType grid grid-cols-2">
                            <div className="w-32 h-24 m-auto border-slate-400 border-2 rounded-md hover:border-blue-500 hover:bg-sky-100"><Image className="h-24 p-2" src={motorboat} alt="MotorBoat" /><p className="text-center">Motor</p></div>
                            <div className="w-32 h-24 m-auto border-slate-400 border-2 rounded-md hover:border-blue-500 hover:bg-sky-100"><Image className="h-24 p-2" src={sailboat} alt="MotorBoat" /><p className="text-center">Sailing</p></div>
                        </div>
                        {yachtType !== "160px" ? <Button className={`ml-3 ${filter.btn_width}`}>Apply</Button> :""}
                    </div>
                    <hr />
                    <div>
                    <div className="flex">
                            <h5>Length</h5>
                            <span onClick={()=>collapse(length_filter,setLength,"length_filter")} class="material-symbols-outlined -mt-2 ml-auto pointer">
                                expand_more
                            </span>
                        </div>
                        <div className="overflow-y-auto length_filter">
                            <Datascroll_R data={list_length} />
                        </div>
                        {length_filter !== "160px" ? <Button className={`${filter.btn_width}`}>Apply</Button> :""}
                    </div>
                    <hr />
                    <div>
                    <div className="flex">
                            <h5>Builder</h5>
                            <span onClick={()=>collapse(builder,setBuilder,"builder")} class="material-symbols-outlined -mt-2 ml-auto pointer">
                                expand_more
                            </span>
                        </div>
                        <div className="overflow-y-auto builder">
                            <Datascroll data={list_builder} />
                        </div>
                        {builder !== "160px" ? <Button className={`${filter.btn_width}`}>Apply</Button> :""}
                    </div>
                    <hr />
                    <div>
                    <div className="flex">
                            <h5>Year</h5>
                            <span onClick={()=>collapse(year,setYear,"year")} class="material-symbols-outlined -mt-2 ml-auto pointer">
                                expand_more
                            </span>
                        </div>
                        <div className="overflow-y-auto year">
                            <Datascroll_R data={list_year} />
                        </div>
                        {year !== "160px" ? <Button className={`${filter.btn_width}`}>Apply</Button> :""}
                    </div>
                    <hr />
                    <div>
                    <div className="flex">
                            <h5>Price</h5>
                            <span onClick={()=>collapse(price,setPrice,"price")} class="material-symbols-outlined -mt-2 ml-auto pointer">
                                expand_more
                            </span>
                        </div>
                        <div className="overflow-y-auto price">
                            <Datascroll_R data={list_price} />
                        </div>
                        {price !== "160px" ? <Button className={`${filter.btn_width}`}>Apply</Button> :""}
                    </div>
                    <hr />
                    <div>
                    <div className="flex">
                            <h5>Country</h5>
                            <span onClick={()=>collapse(country,setCountry,"country")} class="material-symbols-outlined -mt-2 ml-auto pointer">
                                expand_more
                            </span>
                        </div>
                        <div className="overflow-y-auto country">
                            <Datascroll data={list_country} />
                        </div>
                        {country !== "160px" ? <Button className={`${filter.btn_width}`}>Apply</Button> :""}
                    </div>
                    <hr />
                    <div>
                    <div className="flex">
                            <h5>Subtype</h5>
                            <span onClick={()=>collapse(subtype,setSubtype,"subtype")} class="material-symbols-outlined -mt-2 ml-auto pointer">
                                expand_more
                            </span>
                        </div>
                        <div className="overflow-y-auto subtype">
                            <Datascroll_R data={list_subtype} />
                        </div>
                        {subtype !== "160px" ? <Button className={`${filter.btn_width}`}>Apply</Button> :""}
                    </div>
                    <hr />
                    <div>
                    <div className="flex">
                            <h5>Volume</h5>
                            <span onClick={()=>collapse(volume,setVolume,"volume")} class="material-symbols-outlined -mt-2 ml-auto pointer">
                                expand_more
                            </span>
                        </div>
                        <div className="overflow-y-auto volume">
                            <Datascroll_R data={list_volume} />
                        </div>
                        {volume !== "160px" ? <Button className={`${filter.btn_width}`}>Apply</Button> :""}
                    </div>
                </div>
            </div>

        </>
    );
}
