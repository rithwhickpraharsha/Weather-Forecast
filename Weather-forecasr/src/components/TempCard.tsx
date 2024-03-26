import { useState } from "react";



export default function TempCard({forecast} : {forecast : any}){
const [temp,setTemp]  = useState(forecast.day.avgtemp_c);
return(
    <div className="text-white bg-purple-500 rounded-lg p-4 m-5">
        <div className="text-2xl flex justify-center font-semibold">
            {forecast.date}
        </div>
        <div className="flex  items-center">
            <img className = "text-2xl" src = {forecast.day.condition.icon} />
            <div className="text-2xl font-semibold ">{forecast.day.condition.text}</div>
            
        </div>
        <div className="text-2xl mb-4 flex  font-semibold ml-3">
        🔥 {temp} 
        <button className=" mx-2 hover:underline " onClick={()=>{setTemp(forecast.day.avgtemp_c)}}>C</button>
        |
        <button className=" mx-2 hover:underline" onClick={()=>{setTemp(forecast.day.avgtemp_f)}}>F</button>
            
        </div>
        <div className="flex flex-col">
           <div className="text-xl mb-2">Max Temp  : {forecast.day.maxtemp_c} C</div> 
            <div className="text-xl mb-2">Min Temp : {forecast.day.mintemp_c} C</div>
            <div className="text-xl mb-2 ">Wind     : {forecast.day.maxwind_kph} kph</div>
            <div className="text-xl">Humidity      : {forecast.day.avghumidity}</div>


        </div>
    </div>
)
}