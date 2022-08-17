import React, {useState} from 'react';
import Select from 'react-select'
import classes from './Select.module.scss';

const SelectCur = ({data: selectedProps}) => {

    console.log(classes)
    console.log(classes.select__control)

    const [currencyState,setCurrencyState] = useState("USD")

    const htmlfor = selectedProps.label.for;
    // console.log(props)
    // console.log(classes);
    
    const getValue = () => {
      return currencyState ? selectedProps.options.find(c=> c.value === currencyState) : "";
    }
    const onChange = (newValue) => {
        setCurrencyState(newValue.value)
    }

    ////value={changeValue} onChange={onChangeState}

    return (
        <div className={classes.selectWrap}>
            <label className={classes.SelectLabel} htmlFor={htmlfor}>{selectedProps.label.text}</label>
            <Select
                className={classes.select}
                onChange={onChange}
                value={getValue()}
                defaultValue={selectedProps.options[0]}
                options={selectedProps.options}/>
        </div>
    );
};

export default SelectCur;