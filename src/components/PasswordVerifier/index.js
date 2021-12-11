import React, { useState } from 'react'
import InputsList from './InputsList';
import styles from './_passwordVerifier.module.scss';

const PasswordVerifier = () => {
    const [code, setCode] = useState(["", "", "", ""]);
    const [focused, setFocused] = useState(0);

    const handlePassword = () => {
        if (focused < 3) setFocused(focused => focused + 1);
    }

    const handleChange = (e) => {
        let index = e.target.dataset.index;
        let value = e.target.value;
        if (!isNaN(value)) {
            let copy = [...code];
            copy[index] = value;
            setCode(copy);
            handlePassword();
        }
    }

    return (
        <form className={styles.form}>
            <InputsList handleChange={handleChange} values={code} focused={focused} />
            <button className={styles.button}>verify</button>
        </form>
    )
}

export default PasswordVerifier
