import styles from './History.module.css'
import Image from 'next/image'
import marry from '../../assets/img/1.png'
import Layout from '../../components/Layout'
const History = () => {
  return (
    <>
    <Layout title={"History"}>
    <div className={styles.container}>
        <div className={styles.tittle}>
            <span>Transaction History</span>
            <select className={styles.filter}>
                <option value="latest">-- Select Filter--</option>
                <option value="latest">Latest</option>
            </select>
        </div>
        <div className={styles.userTrans}>
            <div className={styles.userInfo}>
            <Image src={marry} alt="profile"/>
            <div className={styles.user}>
                <span>Chrity Mari</span>
                <span>Accept</span>
            </div>
            </div>
            <div className={styles.ammount}>+ Rp50.000</div>
        </div>
        <div className={styles.userTrans}>
            <div className={styles.userInfo}>
            <Image src={marry} alt="profile"/>
            <div className={styles.user}>
                <span>Chrity Mari</span>
                <span>Accept</span>
            </div>
            </div>
            <div className={styles.ammount}>+ Rp50.000</div>
        </div>
        <div className={styles.userTrans}>
            <div className={styles.userInfo}>
            <Image src={marry} alt="profile"/>
            <div className={styles.user}>
                <span>Chrity Mari</span>
                <span>Accept</span>
            </div>
            </div>
            <div className={styles.ammount}>+ Rp50.000</div>
        </div>
                <div className={styles.userTrans}>
            <div className={styles.userInfo}>
            <Image src={marry} alt="profile"/>
            <div className={styles.user}>
                <span>Chrity Mari</span>
                <span>Accept</span>
            </div>
            </div>
            <div className={styles.ammount}>+ Rp50.000</div>
        </div>
                <div className={styles.userTrans}>
            <div className={styles.userInfo}>
            <Image src={marry} alt="profile"/>
            <div className={styles.user}>
                <span>Chrity Mari</span>
                <span>Accept</span>
            </div>
            </div>
            <div className={styles.ammount}>+ Rp50.000</div>
        </div>        
    </div>
    </Layout>
    </>
  )
}

export default History