import styles from './Confirm.module.css'
import Image from 'next/image'
import marry from '../../../assets/img/1.png'
import notes from '../../../assets/img/notes.png'
const Confirm = () => {
  return (
    <div className={styles.container}>
        <div className={styles.tittle}>
            <span>Transfer Money</span>
        </div>
        <div className={styles.userTrans}>
            <div className={styles.userInfo}>
            <Image src={marry} alt="profile" width={100} height={100}/>
            <div className={styles.user}>
                <span>Chrity Mari</span>
                <span>+621321231231</span>
            </div>
            </div>
        </div>
        <div className={styles.tag}>
        <p>Type the amount you want to transfer and then</p>
        <p>press continue to the next steps.</p>
        </div>
        <div className={styles.inputAmmount}>
            <input type="text" placeholder='0.00'/>
            <span>Rp120.000 available</span>
            <div className={styles.notes}>
                <Image src={notes} alt="notes"/>
                <input type="text" placeholder='Add some notes here'/>
            </div>
        </div>
        <div className={styles.continue}>Continue</div>
    </div>
  )
}

export default Confirm