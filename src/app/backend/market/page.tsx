import axios from 'axios';
import { Crypto } from "@/common/common";



export const Fetch  = async (currency:string) :  Promise<Crypto[]> =>{
   
  

    try {
        const resposne =await axios.get<Crypto[]>('https://api.coingecko.com/api/v3/coins/markets',{
            params:{
                vs_currency:currency,
            }
        },

)
        return resposne.data;
        
    } catch (error) {
        
        console.error("error in fetching:",error);
        throw new Error("Failed to fetch cryptocurrency data")
  }
}
