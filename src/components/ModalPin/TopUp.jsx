import { useState } from 'react'
import { useSelector } from 'react-redux'
import styles from './ModalPin.module.css'
import {topUp} from '../../api/api'
import Loading from '../Loading/Loading'
import Modal from '../Modal'
const TopUp = (props) => {
    const [btn, setBtn] = useState(false)
    const [msg, setMsg] = useState('')
    const [amount, setAmmount] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [show, setShow] = useState(false)
    const token = useSelector(state=>state.login.userInfo.token)
    const [redirect, setRedirect] = useState('')
    const addSaldo = async ()=>{
        try {
            setIsLoading(true)
            const body = {
                amount
            }
            const result = await topUp(body, token )
            console.log(result);
            setMsg(result.data.msg)
            setIsLoading(false)
            setShow(true)
            setRedirect(`${result.data.data.redirectUrl}`)
            // if(result){
            //     props.onClose(false)
            // }
        } catch (error) {
            console.log(error);
            setIsLoading(false)
            setMsg(error.response.data.msg)
            setShow(true)
            // props.onClose(false)
        }
    }
    return (
    <div className={`${styles.modal} ${props.show ? styles.show: ''} `}>
        {isLoading ? <Loading/> : ""}
        <Modal show={show} onClose={()=>{
            props.onClose(false)
            setShow(false)
            window.open(`${redirect}`, '_blank')
        }} response={msg}/>
        <div className={styles.modalContent}>
            <div className={styles.modalHeader}>Top Up</div>
            <div className={styles.modalBody}>Enter the ammount of money and clik continue. </div>
            <div className={styles.topUp} onChange={(e)=>{
                setAmmount(e.target.value)
                setBtn(true)
            }}>
                <input type="number" />
            </div>
            <div className={btn ? styles.modalButtonAct : styles.modalButton} onClick={addSaldo}>Continue</div>
        </div>
    </div>
)
}

export default TopUp