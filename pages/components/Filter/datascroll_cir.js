import { Button } from "react-bootstrap"
import filter from "./filter.module.css"
export default function Datascroll_R({data}){
    return(
        <div>
            <div className="">{
                data.map((item)=>{
                    return<div><input className="p-1 mx-3" type="radio" id={item} name={item} value={item} />
                    <label className="font-mono font-semibold" for="vehicle3">{item}</label>
                    </div>
                })
            }</div>
        </div>
    )
}