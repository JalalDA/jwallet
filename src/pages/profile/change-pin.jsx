import React from 'react'
import Layout from '../../components/Layout'
import styles from './Profile.module.css'
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'

const ChangePin = () => {
    const inputPin = useRef()
    const secPin = useRef()
    const thirdPin = useRef()
    const fourthPin = useRef()
    const fivethPin = useRef()
    const sixthPin = useRef()
    const [pin, setPin] = useState('')
    const [btn, setBtn] = useState(false)

    useEffect(()=>{
        if(inputPin){
          inputPin.current.focus()
        }
      },[])
  return (
    <Layout title={"Change Password"}>
        <div className={styles.container}>
            <div className={styles.tittle}>
                <span>Change PIN</span>
                <span>Enter your current 6 digits Zwallet PIN below to continue to the next steps.</span>
            </div>
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
            <div className={styles.btnChange}>Change Password</div>
        </div>
    </Layout>
  )
}

export default ChangePin