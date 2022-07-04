import styles from './Detail.module.css'
import Image from 'next/image'
import marry from '../../../assets/img/1.png'
import Layout from '../../../components/Layout'

const Detail = () => {
  return (
    <Layout title={'Input Payment'}>
    <div className={styles.container}>
        <div className={styles.tittle}>
            <span>Transfer To</span>
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
        <div className={styles.details}>
          <span>Details</span>
        </div>
        <div className={styles.userTrans}>
            <div className={styles.userInfo}>
            <div className={styles.detailInfo}>
                <span>Ammount</span>
                <span>Rp120000</span>
            </div>
            </div>
        </div>
        <div className={styles.userTrans}>
            <div className={styles.userInfo}>
            <div className={styles.detailInfo}>
                <span>Balance Left</span>
                <span>Rp120000</span>
            </div>
            </div>
        </div>
        <div className={styles.userTrans}>
            <div className={styles.userInfo}>
            <div className={styles.detailInfo}>
                <span>Date & Time</span>
                <span>20 - 05 - 2001</span>
            </div>
            </div>
        </div>
        <div className={styles.userTrans}>
            <div className={styles.userInfo}>
            <div className={styles.detailInfo}>
                <span>Notes</span>
                <span>For buying some g</span>
            </div>
            </div>
        </div>
        <div className={styles.continue}>Continue</div>
    </div>
    </Layout>
  )
}

export default Detail