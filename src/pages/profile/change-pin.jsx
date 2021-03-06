import React from 'react'
import Layout from '../../components/Layout'
import styles from './Profile.module.css'
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
import { checkPinUser } from '../../api/api'
import { useSelector } from 'react-redux'
import Loading from '../../components/Loading/Loading'
import Modal from '../../components/Modal'
import { useRouter } from 'next/router'


const ChangePin = () => {
    const inputPin = useRef()
    const secPin = useRef()
    const thirdPin = useRef()
    const fourthPin = useRef()
    const fivethPin = useRef()
    const sixthPin = useRef()
    const [pin, setPin] = useState('')
    const [btn, setBtn] = useState(false)
    const [msg, setMsg] = useState('')
    const [show, setShow] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const token = useSelector(state=>state.login.userInfo.token)
    const router = useRouter()
    const checkPin = async ()=>{
      try {
        setIsLoading(true)
        const result = await checkPinUser(pin, token)
        setMsg(result.data.msg)
        setIsLoading(false)
        setShow(true)
      } catch (error) {
        console.log(error);
        setMsg(error.response.data.msg)
        setIsLoading(false)
        setShow(true)
      }
    }

    useEffect(()=>{
        if(inputPin){
          inputPin.current.focus()
        }
        if(msg === "Correct pin"){
          setPin('')
        }
      },[msg])
  return (
    <>
    {isLoading && <Loading/>}
    <Modal show={show} response={msg} onClose={()=>{
      setShow(false)
      if(msg==="Correct pin"){
        router.push('/profile/confirm-change-pin')
      }
    }}/>
    <Layout title={"Change Pin"}>
        <div className={styles.container}>
            <div className={styles.tittle}>
                <span>Change PIN</span>
                <span>Enter your current 6 digits Zwallet PIN below to continue to the next steps.</span>
            </div>
          <div className={styles.inputpin}>
          <input ref={inputPin} type="text" id='first' maxLength={1} onKeyUp={(e)=>{
            if(e){
              secPin.current.focus()
            }
          }} onChange={e=>{
            setTimeout(()=>{
              setPin(prev=>prev+=e.target.value)
            }, 100)
          }} />
          <input ref={secPin} type="text" id='first' maxLength={1} onKeyUp={(e)=>{
            if(e){
              thirdPin.current.focus()
            }
          }} onChange={e=>{
            setTimeout(()=>{
              setPin(prev=>prev+=e.target.value)
            }, 150)
          }}/>
          <input ref={thirdPin} type="text" id='first' maxLength={1} onKeyUp={(e)=>{
            if(e){
              fourthPin.current.focus()
            }
          }} onChange={e=>{
            setTimeout(()=>{
              setPin(prev=>prev+=e.target.value)
            }, 200)
          }} />
          <input ref={fourthPin} type="text" id='first' maxLength={1} onKeyUp={(e)=>{
            if(e){
              fivethPin.current.focus()
            }
          }}onChange={e=>{
            setTimeout(()=>{
              setPin(prev=>prev+=e.target.value)
            }, 250)
          }} />
          <input ref={fivethPin} type="text" id='first' maxLength={1} onKeyUp={(e)=>{
            if(e){
              sixthPin.current.focus()
            }
          }} onChange={e=>{
            setTimeout(()=>{
              setPin(prev=>prev+=e.target.value)
            }, 300)
          }} />
          <input ref={sixthPin} type="text" id='first' maxLength={1} onChange={e=>{
            setTimeout(()=>{
              setPin(prev=>prev+=e.target.value)
            }, 350)
            setBtn(true)
          }}/>
      </div>
            <div className={btn ? styles.btnChangeAct :styles.btnChange} onClick={checkPin}>Check Pin</div>
        </div>
    </Layout>
    </>
  )
}

export default ChangePin