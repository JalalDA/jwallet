import styles from '../../../../styles/Forgot.module.css'
import Image from 'next/image'
import lockIcon from '../../../assets/img/lockIcon.png'
import eyeCrossed from '../../../assets/img/eye-crossed.png'
import eye from '../../../assets/img/eye.png'
import { useState } from 'react'
import Sidebar from '../../../components/Sidebar/Sidebar'
import {useRouter} from 'next/router'
import { resetPass } from '../../../api/api'
import Modal from '../../../components/Modal'
import Head from 'next/head'


const ResetPassword = () => {
  const [btn, setBtn] = useState(false)
  const [showPass, setShowPass] = useState(false)
  const [newPass, setNewPass] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [msg, setMsg] = useState('')
  const [show, setShow] = useState(false)
  const router = useRouter()
  const reset = async()=>{
    try {
        const body = {
            keysChangePassword : router.query.code,
            newPassword : newPass,
            confirmPassword : confirmPass
        }
        const result = await resetPass(body)
        setMsg(result.data.msg)
        setShow(true)
    } catch (error) {
        console.log(error);
        setMsg(error.response.data.msg)
        setShow(true)
    }
  }
  return (
    <>
    <Head>
      <title>Reset Password</title>
    </Head>
    <div className={styles.container}>
    <Modal show={show} response={msg} onClose={()=>{
        setShow(false)
    }}/>
      <Sidebar/>
    <div className={styles.forgotContainer}>
      <span>Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password In a Minutes.</span>
      <p>To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</p>
      <div className={styles.inputmail}>
        <Image src={lockIcon} alt="emailIcon"/>
        <input type={showPass ? 'text' : 'password'} placeholder='Enter your new password...' onChange={(e)=>{
            setNewPass(e.target.value)
        }} />
        <div className={styles.showpass} onClick={()=>{
          setShowPass(!showPass)
        }}>
          <Image src={showPass? eye : eyeCrossed} alt="showPassword"/>
        </div>
      </div>
      <div className={styles.inputmail}>
        <Image src={lockIcon} alt="emailIcon"/>
        <input type={showPass ? 'text' : 'password'} placeholder='Confirm your new password...' onChange={e=>{
        setConfirmPass(e.target.value)
        setBtn(true)
        }}/>
        <div className={styles.showpass} onClick={()=>{
          setShowPass(!showPass)
        }}>
          <Image src={showPass? eye : eyeCrossed} alt="showPassword"/>
        </div>
      </div>
      <div className={btn ? styles.confirmButtonAct : styles.confirmButton} onClick={reset} >Confirm</div>
    </div>
    </div>
    </>
  )
}

export default ResetPassword