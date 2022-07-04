
import Layout from '../../components/Layout'
import styles from './Profile.module.css'
import Image from 'next/image'
import lockIcon from '../../assets/img/lockIcon.png'
import eye from '../../assets/img/eye.png'
import eyeCross from '../../assets/img/eye-crossed.png'
import { useState } from 'react'
import Modal from '../../components/Modal'

const ChangePassword = () => {
  const [showCurent, setShowCurent] = useState(false)
  const [showNew, setShowNew] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [show, setShow] = useState(false)
  const [btn, setBtn] = useState(false)
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [msg, setMsg] = useState('')
  const [mdlBody, setMdlBody] = useState('')

  const change = async ()=>{
    try {
      if(newPassword !== confirmPassword){
        setMsg('Failed to change password')
        setMdlBody('New Password and Confirm Password doesn`t match')
        return setShow(true)
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Layout title={'Change Password'}>
      <Modal show={show} response={msg} mdlBody={mdlBody} onClose={()=>{
        setShow(false)
      }}/>
        <div className={styles.container}>
            <div className={styles.tittle}>
                <span>Change Password</span>
                <span>You must enter your current password and then type your new password twice.</span>
            </div>
            <div className={styles.inputPassword}>
              <Image src={lockIcon} alt="lock"/>
              <input type={showCurent ? "text" : "password"} placeholder='Curent Password' />
              <Image src={showCurent ? eye : eyeCross} alt="showPass" onClick={()=>{
                setShowCurent(!showCurent)
              }}/>
            </div>
            <div className={styles.inputPassword}>
              <Image src={lockIcon} alt="lock"/>
              <input type={showNew ? "text" : "password"} placeholder='Curent Password' onChange={e=>{
                setNewPassword(e.target.value)
              }} />
              <Image src={showNew ? eye : eyeCross} alt="showPass" onClick={()=>{
                setShowNew(!showNew)
              }}/>
            </div>
            <div className={styles.inputPassword}>
              <Image src={lockIcon} alt="lock"/>
              <input type={showConfirm ? "text" : "password"} placeholder='Curent Password'  onChange={(e)=>{
                setConfirmPassword(e.target.value)
                setBtn(true)
              }} />
              <Image src={showConfirm ? eye : eyeCross} alt="showPass" onClick={()=>{
                setShowConfirm(!showConfirm)
              }}/>
            </div>
            <div className={ btn? styles.btnChangeAct : styles.btnChange} onClick={change}>Change Password</div>
        </div>
    </Layout>
  )
}

export default ChangePassword