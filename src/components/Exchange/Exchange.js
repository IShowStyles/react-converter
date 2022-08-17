import React from 'react';
import SelectCur from "../SelectCur/SelectCur";
import InputVal from "../InputVal/InputVal";
import classes from "./Exchange.module.scss";
import SelectToCur from "../SelectTocur/SelectToCur";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";
//img for select
import usa from "../../img/usa.png";
import ukr from "../../img/ukr.png";
import eur from "../../img/Eur.png";
import rus from "../../img/Eur.png";



const Exchange = () => {


    const inputValProp = {text: "Amount"};

    const changeOptionVal = () => {

    }

    const selectProps = {
        label: {for: "Select", text: "From"},
        labelTwo: {for: "Select", text: "To"},
        options: [
            {label: <div className={classes.option}><img src={usa} width={24} height={24} alt=""/>USD</div>, value: "usd"},
            {label: <div className={classes.option}><img src={ukr} width={24} height={24} alt=""/>UAH</div>, value: "uah"},
            {label: <div className={classes.option}><img src={eur} width={24} height={24} alt=""/>EUR</div>, value: "eur"},
            {label: <div className={classes.option}><img src={rus} width={24} height={24} alt=""/>Rub</div>, value: "rub"},]
    }
    const currencyType = ["Cryptocurrencies", "Fiat", "Charts", "Alerts"];

    return (
        <>
            <div className={classes.ExchangeWrap}>
                <ul className={classes.ExchangeList}>
                    {currencyType.map((item, index) => {
                        return (<li key={index.toString()}>
                            {item.toLocaleUpperCase()}
                        </li>)
                    })}
                </ul>
                <div className={classes.ExchangeCon}>
                    <div className={classes.ExchangeParam}>
                        <InputVal data={inputValProp}/>
                        <SelectCur data={selectProps}/>
                        <div className={classes.ExchangeParamArrows}>
                        <span className={classes.ExchangeParamArrowLeft}>
                            <svg width="14" height="10" viewBox="0 0 14 10" fill="none"
                                 xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd"
                                                                          d="M0 5.00001C0 4.8674 0.0526784 4.74022 0.146447 4.64645C0.240215 4.55268 0.367392 4.50001 0.5 4.50001H12.293L9.146 1.35401C9.05211 1.26012 8.99937 1.13278 8.99937 1.00001C8.99937 0.86723 9.05211 0.739893 9.146 0.646006C9.23989 0.552119 9.36722 0.499374 9.5 0.499374C9.63278 0.499374 9.76011 0.552119 9.854 0.646006L13.854 4.64601C13.9006 4.69245 13.9375 4.74763 13.9627 4.80837C13.9879 4.86912 14.0009 4.93424 14.0009 5.00001C14.0009 5.06577 13.9879 5.13089 13.9627 5.19164C13.9375 5.25238 13.9006 5.30756 13.854 5.35401L9.854 9.35401C9.76011 9.44789 9.63278 9.50064 9.5 9.50064C9.36722 9.50064 9.23989 9.44789 9.146 9.35401C9.05211 9.26012 8.99937 9.13278 8.99937 9.00001C8.99937 8.86723 9.05211 8.73989 9.146 8.64601L12.293 5.50001H0.5C0.367392 5.50001 0.240215 5.44733 0.146447 5.35356C0.0526784 5.25979 0 5.13261 0 5.00001Z"
                                                                          fill="black"/></svg>
                        </span>
                            <span className={classes.ExchangeParamArrowRight}>
                           <svg width="14" height="10" viewBox="0 0 14 10" fill="none"
                                xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd"
                                                                         d="M0 5.00001C0 4.8674 0.0526784 4.74022 0.146447 4.64645C0.240215 4.55268 0.367392 4.50001 0.5 4.50001H12.293L9.146 1.35401C9.05211 1.26012 8.99937 1.13278 8.99937 1.00001C8.99937 0.86723 9.05211 0.739893 9.146 0.646006C9.23989 0.552119 9.36722 0.499374 9.5 0.499374C9.63278 0.499374 9.76011 0.552119 9.854 0.646006L13.854 4.64601C13.9006 4.69245 13.9375 4.74763 13.9627 4.80837C13.9879 4.86912 14.0009 4.93424 14.0009 5.00001C14.0009 5.06577 13.9879 5.13089 13.9627 5.19164C13.9375 5.25238 13.9006 5.30756 13.854 5.35401L9.854 9.35401C9.76011 9.44789 9.63278 9.50064 9.5 9.50064C9.36722 9.50064 9.23989 9.44789 9.146 9.35401C9.05211 9.26012 8.99937 9.13278 8.99937 9.00001C8.99937 8.86723 9.05211 8.73989 9.146 8.64601L12.293 5.50001H0.5C0.367392 5.50001 0.240215 5.44733 0.146447 5.35356C0.0526784 5.25979 0 5.13261 0 5.00001Z"
                                                                         fill="black"/></svg>
                        </span>
                        </div>
                        <SelectToCur data={selectProps}/>
                    </div>
                    <ButtonSubmit/>
                </div>
            </div>
        </>
    );
};

export default Exchange;