import { useRecoilValue } from "recoil"
import { UserData } from "../StateManagement/userinfo"



export default function AppBar(){
    const userData = useRecoilValue(UserData);
    return(
        <div className="flex items-center justify-between  bg-gray-500 shadow-md rounded-md">
            <div className="text-xl ml-3 font-semibold text-white font-serif">ApplyIn.co</div>
            <div className="flex items-center text-white font-semibold">
         <img src ={userData.picture || ''} className="rounded-full h-12 mr-4 my-2"></img>
         <div className="text-xl font-serif mr-1 lg:mr-5 my-2">{userData.name}</div>
         </div>
         
        </div>
    )
}