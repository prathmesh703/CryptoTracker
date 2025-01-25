import { Fetch } from "@/app/backend/market/page";
import { Crypto } from "@/common/common";
import { GetStaticProps } from "next";
import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";
import { setCurrency } from "@/lib/feature/currency";

interface Props {
  coins: Crypto[];
}
export const HomePage: React.FC<Props> = ({ coins }) => {
  const dispatch = useDispatch<AppDispatch>();
 const currency=useSelector((state:RootState)=> state.currency.curr)

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setCurrency(event.target.value as string));
  };
  return (
    <div className="container mx-auto p-4">
      <div className="flex gap-5 p-5">
        <h1 className="text-2xl font-bold mb-4">Cryptocurrency Prices</h1>
        <div className="w-44">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Currency</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              label="Currency"
              onChange={handleChange}
            >
              <MenuItem value="inr">INR</MenuItem>
              <MenuItem value="usd">USD</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <table className="table-auto w-full text-left border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border border-gray-300">Rank</th>
            <th className="p-2 border border-gray-300">Name</th>
            <th className="p-2 border border-gray-300">Price</th>
            <th className="p-2 border border-gray-300">Market Cap</th>
            <th className="p-2 border border-gray-300">24h Change</th>
            <th className="p-2 border border-gray-300">Volume</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr key={coin.id}>
              <td className="p-2 border border-gray-300">
                {coin.market_cap_rank}
              </td>
              <td className="p-2 border border-gray-300">{coin.name}</td>
              <td className="p-2 border border-gray-300">
                {coin.current_price.toFixed(2)}
              </td>
              <td className="p-2 border border-gray-300">
                {coin.market_cap.toLocaleString()}
              </td>
              <td
                className={`p-2 border border-gray-300 ${
                  coin.price_change_percentage_24h > 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </td>
              <td className="p-2 border border-gray-300">
                {coin.total_volume.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
