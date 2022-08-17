import React from 'react';
import classes from "../SelectCur/Select.module.scss";
import style from "./SelectToCur.module.scss"
import Select from "react-select";
import {useState} from "react";

const SelectToCur = ({data: selectedProps}) => {

    const [currencyState,setCurrencyState] = useState("USD")


    const htmlfor = selectedProps.labelTwo.for;

    const getValue = () => {
        return currencyState ? selectedProps.options.find(c=> c.value === currencyState) : "";
    }
    const onChange = (newValue) => {
        setCurrencyState(newValue.value)
    }

    console.log(currencyState)

    return (
        <>
            <div className={style.SelectToCurWrap}>
                <label className={classes.SelectLabelFlexStart} htmlFor={htmlfor}>{selectedProps.labelTwo.text}</label>
                <Select
                    className={classes.select}
                    onChange={onChange}
                    value={getValue()}
                    defaultValue={selectedProps.options[2]}
                    options={selectedProps.options}/>
            </div>
        </>
    );
};

export default SelectToCur;