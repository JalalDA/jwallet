import { useState } from 'react';
import styles from '../../../styles/Signup.module.css'
import { Person, Envelope, Lock, Eye, EyeSlashFill } from 'react-bootstrap-icons';
import Image from 'next/image'
import lockIcon from '../../assets/img/lockIcon.png'
import mail from '../../assets/img/mail.png'
import user from '../../assets/img/user.png'
import eye from '../../assets/img/eye.png'
import eyecross from '../../assets/img/eye-crossed.png'
import axios from 'axios';
import {useRouter} from 'next/router'
import Modal from '../../components/Modal';

const SignUp = (props) => {
  const [showPass, setShowPass] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')
  const [show, setShow] = useState(false)
  const [btn, setBtn] = useState(false)
  const router = useRouter()

  const register = async ()=>{
    try {
      const body = {
        firstName,
        lastName,
        email,
        password
      }
      const result = await axios.post("https://fazzpay.herokuapp.com/auth/register", body)
      if(result){
        setShow(true)
      }
      setMsg(result.data.msg)

    } catch (error) {
      console.log(error);
      setShow(true)
      setMsg(error.response.data.msg)
    }
  }
  return (
    <>
    <Modal show={show} response={msg} onClose={()=>{
      if(show){
        props.setPage('login')
        router.push('/auth', 'auth/login')
      }
      setShow(false)
    }}/>
        <div className={styles.signUpContainer}>
            <p className={styles.signUpTittle}>Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</p>
            <p className={styles.signUpDesc}>Transfering money is eassier than ever, you can access FazzPay wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
            <div className={styles.signUpForm}>
              <div className={styles.signUpInput}>
                  <Image src={user} alt='firstname' height={32} width={32} />
                  <input type="text" id="firstname" placeholder="Enter your firstname" onChange={(e)=>{
                    setFirstName(e.target.value)
                  }} />
              </div>
              <div className={styles.signUpInput}>
                  <Image src={user} alt='lastname' height={32} width={32} />
                  <input type="text" id="lastname" placeholder="Enter your lastname" onChange={e=>{
                    setLastName(e.target.value)
                  }} />
              </div>
              <div className={styles.signUpInput}>
                  <Image src={mail} alt='email' height={32} width={32} />
                  <input type="text" id="email" placeholder="Enter your e-mail" onChange={e=>{
                    setEmail(e.target.value)
                  }}/>
              </div>
              <div className={styles.signUpInput}>
                  <Image src={lockIcon} alt='password' height={32} width={32}/>
                  <input type={`${showPass ? 'text' : 'password'}`} id="password" placeholder="Create your password" onChange={e=>{
                    setPassword(e.target.value)
                    setBtn(true)
                  }} />
                  <div
                    className="icons-eye"
                    value={showPass}
                    onClick={() => {
                        setShowPass(!showPass);
                    }}
                  >
                    {showPass ? <Image src={eye} alt='showpass' size={30} /> : <Image src={eyecross} alt='hiddenpass' size={30} />}
                  </div>
              </div>
              <div className={btn ? styles.signUpButtonAct : styles.signUpButton} onClick={register
              //   ()=>{
              //   setShow(true)
              // }}
              }>Sign Up</div>
            </div>
            <p className={styles.loginRoute}>Already have an account? Let’s <b  onClick={()=>{
              props.setPage('login')
              router.push('/auth', 'auth/login')
            }}>Login</b></p>
        </div>
      </>
  )
}

export default SignUp