import React from 'react';
import classes from "./InputVal.module.scss";



const InputVal = ({data : inputValProp}) => {

    const getValue = (e) => {
        console.log(e.target.value,"entered amount")
    }

    return (
        <div className={classes.inputValWrap}>
            <label>{inputValProp.text}</label>
            <input defaultValue={1} onChange={getValue}/>
        </div>
    );
};

export default InputVal;