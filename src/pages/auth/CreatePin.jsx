import styles from '../../../styles/CreatePin.module.css'
import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { updatePin } from '../../api/api'
import Image from 'next/image'
import success from '../../assets/img/success.png'

const CreatePin = () => {
  const inputPin = useRef()
  const secPin = useRef()
  const thirdPin = useRef()
  const fourthPin = useRef()
  const fivethPin = useRef()
  const sixthPin = useRef()
  const [btn, setBtn] = useState(false)
  const [pin, setPin] = useState('')
  const[isSucces, setIsSucces] = useState(false)
  const id = useSelector(state=>state.login.userInfo.id)
  const token = useSelector(state=>state.login.userInfo.token)
  const createPin = ()=>{
    const body = {
      pin
    }
    updatePin(id, body, token)
    .then(result=>{
      setIsSucces(true)
    }).catch(err=>{
      console.log(err);
    })
  }
  useEffect(()=>{
    if(inputPin){
      inputPin.current.focus()
    }
  },[])
  return (
    <div className={styles.createPinContainer}>
      {isSucces ? 
      <>
      <div className={styles.imgPin}>
      <Image src={success} alt="succes" height={70} width={70}/>
      </div>
      <span>Your PIN Was Successfully Created</span>
      <p>Your PIN was successfully created and you can now access all the features in FazzPay.</p>
      </>
      : 
      <>
       <span>Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That You Created Yourself.</span>
      <p>Create 6 digits pin to secure all your money and your data in FazzPay app. Keep it secret and don’t tell anyone about your FazzPay account password and the PIN.</p>
      <div className={styles.inputpin}>
          <input ref={inputPin} type="integer" id='first' maxLength={1} onKeyUp={(e)=>{
            if(e){
              secPin.current.focus()
            }
          }} onChange={e=>{
            setPin(prev=>prev+=e.target.value)
          }}/>
          <input ref={secPin} type="text" id='first' maxLength={1} onKeyUp={(e)=>{
            if(e){
              thirdPin.current.focus()
            }
          }} onChange={e=>{
            setPin(prev=>prev+=e.target.value)
          }}/>
          <input ref={thirdPin} type="text" id='first' maxLength={1} onKeyUp={(e)=>{
            if(e){
              fourthPin.current.focus()
            }
          }} onChange={e=>{
            setPin(prev=>prev+=e.target.value)
          }} />
          <input ref={fourthPin} type="text" id='first' maxLength={1} onKeyUp={(e)=>{
            if(e){
              fivethPin.current.focus()
            }
          }}onChange={e=>{
            setPin(prev=>prev+=e.target.value)
          }} />
          <input ref={fivethPin} type="text" id='first' maxLength={1} onKeyUp={(e)=>{
            if(e){
              sixthPin.current.focus()
            }
          }} onChange={e=>{
            setPin(prev=>prev+=e.target.value)
          }} />
          <input ref={sixthPin} type="text" id='first' maxLength={1} onChange={e=>{
            setPin(prev=>prev+=e.target.value)
            setBtn(true)
          }}/>
      </div>
      <div className={btn ? styles.confimButtonAct : styles.confimButton} onClick={createPin}>Confirm</div>
      </>}
    </div>
  )
}

export default CreatePin