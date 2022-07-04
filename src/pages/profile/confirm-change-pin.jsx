import Layout from '../../components/Layout'
import styles from './Profile.module.css'
import { useRef, useState, useEffect } from 'react'
import { updatePin } from '../../api/api'
import { useSelector } from 'react-redux'
import Loading from '../../components/Loading/Loading'
import Modal from '../../components/Modal'
import { useRouter } from 'next/router'


const ConfirmChangePin = () => {
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
    const id = useSelector(state=>state.login.userInfo.id)
    const router = useRouter()

    const checkPin = async ()=>{
      try {
        setIsLoading(true)
        const body ={
            pin
        }
        const result = await updatePin(id, body, token)
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
      },[])
  return (
    <>
    {isLoading && <Loading/>}
    <Modal show={show} response={msg} onClose={()=>{
      setShow(false)
      router.push('/profile')
    }}/>
    <Layout title={"Confirm Change Pin"}>
        <div className={styles.container}>
            <div className={styles.tittle}>
                <span>Input New PIN</span>
                <span>Type your new 6 digits security PIN to use in Zwallet.</span>
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
            <div className={btn ? styles.btnChangeAct :styles.btnChange} onClick={checkPin}>Confrim Pin</div>
        </div>
    </Layout>
    </>
  )
}

export default ConfirmChangePin