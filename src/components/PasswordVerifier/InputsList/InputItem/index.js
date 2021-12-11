import React, { useRef } from 'react'
import styles from './_inputItem.module.scss';

const InputItem = ({ handleChange, value, index, isFocused }) => {
    const focusedInput = useRef();
    return (
        <input maxLength="1" value={value} className={styles.input} type="text" data-index={index} onChange={handleChange} disabled={!isFocused} ref={focusedInput} />
    )
}

export default InputItem
