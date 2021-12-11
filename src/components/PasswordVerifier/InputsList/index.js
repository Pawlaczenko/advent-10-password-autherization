import React, { useState } from 'react'
import InputItem from './InputItem';
import styles from './_inputsList.module.scss';

const InputsList = ({ values, handleChange, focused }) => {

    let inputs = [];
    for (let i = 0; i < 4; i++) {
        inputs.push(<InputItem value={values[i]} key={i} handleChange={handleChange} index={i} isFocused={focused === i} />);
    }

    return (
        <ul className={styles.wrapper}>
            {inputs.map(el => el)}
        </ul>
    )
}

export default InputsList
