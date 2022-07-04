import styles from './ModalPin.module.css'

const Prompt = (props) => {
  return (
    <div className={`${styles.modal} ${props.show ? styles.show: ''} `}>
    <div className={styles.modalContentPrompt}>
        <div className={styles.modalHeader}>{props.msg}</div>
        <div className={styles.modalBody}></div>
        <div className={styles.btnPrompt}>
            <div className={styles.modalButtonAct} onClick={props.onClose}>Ok</div>
        </div>
    </div>
</div>
  )
}

export default Prompt