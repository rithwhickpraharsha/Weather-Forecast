import { useEffect, useState } from "react";
import AppBar from "./AppBar";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TempCard from "./TempCard";
export default function Dashboard(){
    const [city,setCity] = useState('');
    const [showInfo,setShowInfo] = useState(false);
    const [weather,setWeather] = useState({location:{name:''},current:{},forecast:{forecastday:[]}});
    const [load,setLoad] = useState(true);
    useEffect(()=>{
  async function defaultLoc(){
    const res = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=297a9db8c3b04c099ad184801242603&q=India&days=10`);
    console.log(res.data);
    setWeather(res.data);
    setLoad(false)
    setShowInfo(true)

  }
        defaultLoc();
    },[])
    async function FetchDetails(){
        try{
        const res = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=297a9db8c3b04c099ad184801242603&q=${city}&days=10`);
        console.log(res.data);
        setWeather(res.data);
        setLoad(false);
        
    }catch(err : any){
        toast.error(err.response.data.error.message);
        
    }

    }
    return(
        <div>
            
        <div className="h-screen bg-black overflow-auto">
        <ToastContainer />  
        <AppBar />
        
        <div className="flex flex-col justify-center items-center w-screen">
        <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6gr0AvEyE9ux6amA3L0xeU0SEYbxJZNFCjQ&usqp=CAU" />
      
        <input type ='text' className = "h-10 w-1/3 rounded-md" placeholder="      Enter the Location   " onChange={(e)=>{setCity(e.target.value)}}/>
        <button className="bg-green-500 rounded-md p-2 mt-3" onClick={()=>{FetchDetails();setShowInfo(true)}}>search</button>
         <div className="text-3xl text-white mt-5">{weather.location.name}</div>
        {(!load && showInfo) ? 
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 m-6">
            {
                weather.forecast.forecastday.map((weather_daywise,id)=>{
                     return <TempCard key = {id} forecast={weather_daywise}/> 
                })
            }
        </div> : 
        <div className="m-5 flex justify-center items-center"> 
        Loading ...
        </div>
        }
        
        </div>
        </div>
        </div>
    )
}