"use client"
import LogIn from "@/components/login";
import { Fetch } from "./api/coin/market/page";
import { useEffect, useState } from "react";
import { Crypto } from "@/common/common";
import { HomePage } from "./home.js/page";


export default function Home() {
const [cryptocoin,setCoins]=useState<Crypto[]|null>(null);
const [loading,setloading]=useState<boolean>(true);

useEffect(()=>{
  const fetchData = async ()=>{
    try{
      const data = await Fetch();
      console.log(data)
      setCoins(data);
    }
    catch(error){
      console.error("error in rendering fetch",error);

    }
    finally {
      setloading(false);
    }
  }
  fetchData();
},[]);
  const coins=Fetch();
  return (
    <div >

     <h1 className="p-4">   
     TRACKER   
      </h1> 
      <LogIn/>;
      
      <HomePage coins={cryptocoin || []}/>;

    </div>
  );
}
