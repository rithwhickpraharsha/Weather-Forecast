import { useState } from "react";



export default function TempCard({forecast} : {forecast : any}){
const [temp,setTemp]  = useState(forecast.day.avgtemp_c);
const [mintemp,setMintemp] = useState(forecast.day.mintemp_c);
const [maxtemp,setMaxtemp] = useState(forecast.day.maxtemp_c);
return(
    <div className="text-white bg-purple-500 rounded-lg p-4 m-5">
        <div>
         
        <div className="text-2xl flex  font-semibold">
        <div className="mx-4">📆</div> {forecast.date}
        </div>
        </div>
        <div className="flex  items-center">
            <img className = "text-2xl" src = {forecast.day.condition.icon} />
            <div className="text-2xl font-semibold ">{forecast.day.condition.text}</div>
            
        </div>
        <div className="text-2xl mb-4 flex  font-semibold ml-3 ">
        🔥 {temp} 
        <div className="text-xl flex justify-center items-center ml-2">({mintemp} | {maxtemp})</div>
        <button className=" mx-2 hover:underline " onClick={()=>{setTemp(forecast.day.avgtemp_c);setMaxtemp(forecast.day.maxtemp_c);setMintemp(forecast.day.mintemp_c);}}>C</button>
        |
        <button className=" mx-2 hover:underline" onClick={()=>{setTemp(forecast.day.avgtemp_f);setMaxtemp(forecast.day.maxtemp_f);setMintemp(forecast.day.mintemp_f);}}>F</button>
            
        </div>
        
    </div>
)
}