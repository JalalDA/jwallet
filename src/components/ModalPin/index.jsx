import styles from './ModalPin.module.css'
import {useRef, useEffect, useState} from 'react'

const ModalPin = () => {
    const [pin, setPin] = useState('')
    const [btn, setBtn] = useState(false)
    const inputPin = useRef()
    const secPin = useRef()
    const thirdPin = useRef()
    const fourthPin = useRef()
    const fivethPin = useRef()
    const sixthPin = useRef()
    useEffect(()=>{
        if(inputPin){
            inputPin.current.focus()
        }
    },[])
    return (
    <div className={styles.modal}>
        <div className={styles.modalContent}>
            <div className={styles.modalHeader}>Enter PIN to transfer</div>
            <div className={styles.modalBody}>Enter your 6 digits PIN for confirmation to continue transferring money. </div>
            <div className={styles.inputpin}>
          <input ref={inputPin} type="text" id='first' maxLength={1} onKeyUp={(e)=>{
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
            <div className={btn ? styles.modalButtonAct : styles.modalButton}>Continue</div>
        </div>
    </div>
)
}

export default ModalPin