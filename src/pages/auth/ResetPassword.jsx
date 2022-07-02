import styles from '../../../styles/Forgot.module.css'
import Image from 'next/image'
import lockIcon from '../../assets/img/lockIcon.png'
import eyeCrossed from '../../assets/img/eye-crossed.png'
import eye from '../../assets/img/eye.png'
import { useState } from 'react'
const ForgotPassword = () => {
  const [btn, setBtn] = useState(false)
  const [showPass, setShowPass] = useState(false)
  return (
    <div className={styles.forgotContainer}>
      <span>Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password In a Minutes.</span>
      <p>To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</p>
      <div className={styles.inputmail}>
        <Image src={lockIcon} alt="emailIcon"/>
        <input type={showPass ? 'text' : 'password'} placeholder='Enter your new password...'/>
        <div className={styles.showpass} onClick={()=>{
          setShowPass(!showPass)
        }}>
          <Image src={showPass? eye : eyeCrossed} alt="showPassword"/>
        </div>
      </div>
      <div className={styles.inputmail}>
        <Image src={lockIcon} alt="emailIcon"/>
        <input type={showPass ? 'text' : 'password'} placeholder='Enter your new password...' onChange={e=>{
          setBtn(true)
        }}/>
        <div className={styles.showpass} onClick={()=>{
          setShowPass(!showPass)
        }}>
          <Image src={showPass? eye : eyeCrossed} alt="showPassword"/>
        </div>
      </div>
      <div className={btn ? styles.confirmButtonAct : styles.confirmButton}>Confirm</div>
    </div>
  )
}

export default ForgotPassword