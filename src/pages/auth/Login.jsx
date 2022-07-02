import { useState } from 'react';
import Image from 'next/image'
import styles from '../../../styles/Signup.module.css'
import {Envelope, Lock, Eye, EyeSlashFill } from 'react-bootstrap-icons';
import { useRouter } from 'next/router';
import lockIcon from '../../assets/img/lockIcon.png'
import mail from '../../assets/img/mail.png'
import Modal from '../../components/Modal';
import eye from '../../assets/img/eye.png'
import eyecross from '../../assets/img/eye-crossed.png'
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../../redux/actionCreator/login';

const Login = (props) => {
  const [showPass, setShowPass] = useState(false)
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [show, setShow] = useState(false)

  const router = useRouter()
  const msg = useSelector(state=>state.login.msg)
  const pin = useSelector(state=>state.login.pin)
  const dispatch = useDispatch()
  const login = ()=>{
      const body = {
        email,
        password : pass
      }
      dispatch(loginAction(body))
      setShow(true)
      if(pin){
        router.push('/')
      }else{
        props.setPage('createPin')
        router.push('/auth', 'auth/create-pin')
      }
  }
  return (
    <>
    <Modal show={show} onClose={()=>{
      setShow(false)
    }} response={msg}/>
        <div className={styles.signUpContainer}>
            <p className={styles.signUpTittle}>Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</p>
            <p className={styles.signUpDesc}>Transfering money is eassier than ever, you can access FazzPay wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
            <div className={styles.signUpForm}>
              <div className={styles.signUpInput}>
                  <Image src={mail} alt='emailIcon' height={32} width={32}/>
                  <input type="text" id="email" placeholder="Enter your e-mail" onChange={(e)=>{
                    setEmail(e.target.value)
                  }} />
              </div>
              <div className={styles.signUpInput}>
                  <Image src={lockIcon} alt='emailIcon' height={32} width={32}/>
                  <input type={`${showPass ? 'text' : 'password'}`} id="password" placeholder="enter your password" onChange={(e)=>{
                    setPass(e.target.value)
                  }}/>
                  <div
                    className="icons-eye"
                    value={showPass}
                    onClick={() => {
                        setShowPass(!showPass);
                    }}
                  >
                    {showPass ? <Image src={eye} alt='showpass' size={32} /> : <Image src={eyecross} alt='hiddenpass' size={32} />}
                  </div>
              </div>
              <span onClick={()=>{
                props.setPage('forgot-password')
                router.push('/auth', 'auth/forgot-password')
              }}>Forgot Password?</span>
              <div className={styles.signUpButton} onClick={login}>Login</div>
            </div>
            <p className={styles.loginRoute}>Don`t have an account? Let’s <b  onClick={()=>{
              props.setPage('signup')
              router.push('/auth', 'auth/signup')
            }}>Sign Up</b></p>
        </div>
      </>
  )
}

export default Login