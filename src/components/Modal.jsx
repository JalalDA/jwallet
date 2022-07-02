import { useState } from 'react'
import styles from '../../styles/Modal.module.css'

const Modal = (props) => {
return (
    <>
    <div className={`${styles.modal} ${props.show ? styles.show : ''}`}>
        <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
                <div className={styles.modalTitle}>{props.response}</div>
                <div className={styles.modalBody}></div>
                <div className={styles.modalFooter}>
                    <div className='modalButton' onClick={props.onClose}>Ok</div>
                </div>
            </div>
        </div>
    </div>
    </>
)
}

export default Modal