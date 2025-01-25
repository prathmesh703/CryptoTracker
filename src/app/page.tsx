"use client";
import LogIn from "@/components/login";
import { Fetch } from "./backend/market/page";
import { useCallback, useEffect, useState } from "react";
import { Crypto } from "@/common/common";
import { HomePage } from "./pages/home.js/page";
import { useSelector } from "react-redux";
import store, { RootState } from "@/lib/store";
import { debounce } from "@mui/material";

export default function Home() {
  const [cryptocoin, setCoins] = useState<Crypto[] | null>(null);
  const [loading, setloading] = useState<boolean>(true);

 const currency=useSelector((state:RootState)=> state.currency.curr)

 const fetchData = useCallback(
  debounce(async(currency)=>{
    setloading(true);
    try {
      const data = await Fetch(currency);
      console.log(currency);
      
      setCoins(data);
    } catch (error) {
      console.error("error in rendering fetch", error);
    } finally {
      setloading(false);
    }
  },1000),
  []
 )
  useEffect(() => {
   
    fetchData(currency);
  }, [currency, fetchData]);
  return (
    <div>
      <h1 className="p-4">TRACKER</h1>
      {loading && <p>Loading...</p>}
      <LogIn />;
      <HomePage coins={cryptocoin || []} />;
    </div>
  );
}
