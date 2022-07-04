import styles from './ModalPin.module.css'

const Prompt = (props) => {
  return (
    <div className={`${styles.modal} ${props.show ? styles.show: ''} `}>
    <div className={styles.modalContent}>
        <div className={styles.modalHeader}>Log out</div>
        <div className={styles.modalBody}>Do you want to Log out?</div>
        <div className={styles.btnPrompt}>
            <div className={styles.modalButton} onClick={props.onClose}>No</div>
            <div className={styles.modalButtonAct} onClick={props.logout}>Yes</div>
        </div>
    </div>
</div>
  )
}

export default Prompt