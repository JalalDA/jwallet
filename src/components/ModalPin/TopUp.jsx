import { useState } from 'react'
import { useSelector } from 'react-redux'
import styles from './ModalPin.module.css'
import {topUp} from '../../api/api'
import Loading from '../Loading/Loading'

const TopUp = (props) => {
    const [btn, setBtn] = useState(false)
    const [amount, setAmmount] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const token = useSelector(state=>state.login.token)
    const addSaldo = async ()=>{
        try {
            setIsLoading(true)
            const body = {
                amount
            }
            const result = await topUp(body, token )
            console.log(result);
            window.open(`${result.data.data.redirectUrl}`, '_blank')
            setIsLoading(false)
            if(result){
                props.onClose(false)
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false)
            props.onClose(false)
        }
    }
    return (
    <div className={`${styles.modal} ${props.show ? styles.show: ''} `}>
        {isLoading ? <Loading/> : ""}
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