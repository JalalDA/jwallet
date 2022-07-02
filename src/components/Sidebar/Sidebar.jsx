import styles from '../../../styles/Sidebar.module.css'
import Image from 'next/image'
import phone from '../../assets/img/phone.png'
const Sidebar = () => {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebarTittle}>
        FazzPay
      </div>
      <div className={styles.sideImage}>
        <Image src={phone} alt="mobile-app"/>
      </div>
      <div className={styles.sideDescription}>
        <span>App that Covering Banking Needs.</span>
        <p>Zwallet is an application that focussing in banking needs for all users
in the world. Always updated and always following world trends.
5000+ users registered in Zwallet everyday with worldwide
users coverage.</p>
      </div>
    </div>
  )
}

export default Sidebar