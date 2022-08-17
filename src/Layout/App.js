import classes from "./App.module.scss";
import {useEffect, useState} from "react";
import Exchange from "../components/Exchange/Exchange";

export default function App() {

    // const apiKeyRate = "http://api.coinlayer.com/api/live?access_key=";
    // const AccessKey  = "31c32d69800a08984aacb2f7af827818";
    // const [rateData,setRateData] =   useState([]);
    //
    // const defaultValues = ['EUR','USD','UAH','RUB'];
    // const cryptoValues = ["BTC","ETH",];

    // useEffect(()=>{
    //
    //     const getResource = async () => {
    //         const res = await fetch(`${apiKeyRate}${AccessKey}`);
    //
    //         if (!res.ok) {
    //             throw new Error(`Could not fetch ${AccessKey}` + `, received ${res.status}`)
    //         }
    //         return await res.json();
    //     };
    //
    //     setUsdRate(getResource());
    //
    // },[])



  return (
      <>
          <div className={classes.wrap}>
              <Exchange/>
          </div>
      </>
  );
}
