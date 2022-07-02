import styles from '../../../styles/Forgot.module.css'
import Image from 'next/image'
import mail from '../../assets/img/mail.png'

import { useState } from 'react'
const ForgotPassword = () => {
  const [btn, setBtn] = useState(false)
  return (
    <div className={styles.forgotContainer}>
      <span>Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password In a Minutes.</span>
      <p>To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</p>a
      <div className={styles.inputmail}>
        <Image src={mail} alt="emailIcon"/>
        <input type="text" placeholder='Enter your email ...' onChange={()=>{
          setBtn(true)
        }}/>
      </div>
      <div className={btn ? styles.confirmButtonAct : styles.confirmButton}>Confirm</div>
    </div>
  )
}

export default ForgotPassword