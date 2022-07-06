import styles from './Side.module.css'
import Image from 'next/image'
import plus from '../../assets/img/plus.png'
import grid from '../../assets/img/grid.png'
import arrow from '../../assets/img/arrow-up.png'
import user from '../../assets/img/userDash.png'
import logout from '../../assets/img/log-out.png'
import { useRouter } from 'next/router'
// import { useState } from 'react'


const Side = (props) => {
  const router = useRouter()
  // const [showToggle, setShowToggle] = useState(true)
  console.log(props.showToggle);
  return (
    <div className={`${styles.sideContainer} ${props.showToggle ? styles.show : ""}`}>
      <div className={styles.menuSide}>
        <div className={styles.item} onClick={()=>{
          router.push('/dashboard')
        }}>
          <Image src={grid} alt="user"/>
          <span>Dashboard</span>
        </div>
        <div className={styles.item}onClick={()=>{
          router.push('/transfer')
        }}>
          <Image src={plus} alt="user"/>
          <span>Transfer</span>
        </div>
        <div className={styles.item}onClick={()=>{
          router.push('/topup')
        }}>
          <Image src={arrow} alt="user"/>
          <span>Top Up</span>
        </div>
        <div className={styles.item}onClick={()=>{
          router.push('/profile')
        }}>
          <Image src={user} alt="user"/>
          <span>Profile</span>
        </div>
      </div>
      <div className={styles.logout}onClick={()=>{
          router.push('/dashboard')
        }}>
        <Image src={logout} alt="logout"/>
        <p>Logout</p>
      </div>
    </div>
  )
}

export default Side