import styles from '../../../styles/CreatePin.module.css'
import { useEffect, useRef } from 'react'
const CreatePin = () => {
  const inputPin = useRef()
  const secPin = useRef()
  const thirdPin = useRef()
  const fourthPin = useRef()
  const fivethPin = useRef()
  const sixthPin = useRef()

  useEffect(()=>{
    inputPin.current.focus()
  },[])
  return (
    <div className={styles.createPinContainer}>
      <span>Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That You Created Yourself.</span>
      <p>Create 6 digits pin to secure all your money and your data in FazzPay app. Keep it secret and don’t tell anyone about your FazzPay account password and the PIN.</p>
      <div className={styles.inputpin}>
          <input ref={inputPin} type="integer" id='first' maxLength={1} onKeyUp={(e)=>{
            if(e){
              secPin.current.focus()
            }
          }} />
          <input ref={secPin} type="text" id='first' maxLength={1} onKeyUp={(e)=>{
            if(e){
              thirdPin.current.focus()
            }
          }} />
          <input ref={thirdPin} type="text" id='first' maxLength={1} onKeyUp={(e)=>{
            if(e){
              fourthPin.current.focus()
            }
          }}  />
          <input ref={fourthPin} type="text" id='first' maxLength={1} onKeyUp={(e)=>{
            if(e){
              fivethPin.current.focus()
            }
          }} />
          <input ref={fivethPin} type="text" id='first' maxLength={1} onKeyUp={(e)=>{
            if(e){
              sixthPin.current.focus()
            }
          }}  />
          <input ref={sixthPin} type="text" id='first' maxLength={1} />
      </div>
      <div className={styles.confimButton}>Confirm</div>
    </div>
  )
}

export default CreatePin