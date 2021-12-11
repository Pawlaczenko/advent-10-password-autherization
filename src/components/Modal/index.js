import React from 'react'
import styles from './_modal.module.scss';

const Modal = (props) => {
    return (
        <div className={styles.modal}>
            {props.children}
        </div>
    )
}

export default Modal
