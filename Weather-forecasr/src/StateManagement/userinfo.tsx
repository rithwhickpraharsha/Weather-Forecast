import { atom } from "recoil";


export const UserData = atom({
    key:'UserData' ,
    default:{
        name:null,
        picture:null
    }
});

