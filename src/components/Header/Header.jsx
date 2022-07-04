import styles from './Header.module.css'
import bell from '../../assets/img/bell.png'
import Image from 'next/image'

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logo}>FazzPay</div>
      <div className={styles.profile}>
        <div className={styles.imgProfile}>Foto</div>
        <div className={styles.info}>
          <div className="name">Nama</div>
          <div className="phone">Nomer hape</div>
        </div>
        <div className={styles.notif}>
          <Image src={bell} alt="notification"/>
        </div>
      </div>
    </div>
  )
}

export default Header