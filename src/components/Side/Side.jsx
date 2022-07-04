import styles from './Side.module.css'
import Image from 'next/image'
import plus from '../../assets/img/plus.png'
import grid from '../../assets/img/grid.png'
import arrow from '../../assets/img/arrow-up.png'
import user from '../../assets/img/userDash.png'
import logout from '../../assets/img/log-out.png'
const Side = () => {
  return (
    <div className={styles.sideContainer}>
      <div className={styles.menuSide}>
        <div className={styles.item}>
          <Image src={grid} alt="user"/>
          <p>Dashboard</p>
        </div>
        <div className={styles.item}>
          <Image src={plus} alt="user"/>
          <p>Transfer</p>
        </div>
        <div className={styles.item}>
          <Image src={arrow} alt="user"/>
          <p>Top Up</p>
        </div>
        <div className={styles.item}>
          <Image src={user} alt="user"/>
          <p>Profile</p>
        </div>
      </div>
      <div className={styles.logout}>
        <Image src={logout} alt="logout"/>
        <p>Logout</p>
      </div>
    </div>
  )
}

export default Side