import Layout from "../../components/Layout"
import styles from './Profile.module.css'
import phoneIcon from '../../assets/img/phoneIcon.png'
import Image from "next/image"
import { useState } from "react"
import { editPhoneNumber } from "../../api/api"
import { useSelector } from "react-redux"
import Modal from "../../components/Modal"
import Loading from "../../components/Loading/Loading"

const ManagePhone = () => {
    const [btn, setBtn] = useState(false)
    const [noTelp, setNoTelp] = useState(0)
    const [msg, setMsg] = useState(false)
    const [show, setShow] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const id = useSelector(state=>state.login.userInfo.id)
    const token = useSelector(state=>state.login.userInfo.token)

    const editPhone = async ()=>{
        try {
            setIsLoading(true)
            const body = {
                noTelp
            }
            const result = await editPhoneNumber(id, body, token)
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
  return (
    <>
    {isLoading && <Loading/>}
    <Modal show={show} response={msg} onClose={()=>{
        setShow(false)
    }}/>
    <Layout title={"Manage Phone Number"}>
        <div className={styles.container}>
            <div className={styles.tittle}>
                <span>Edit Phone Number</span>
                <span>Add at least one phone number for the transfer ID so you can start transfering your money to another user.</span>
            </div>
            <div className={styles.inputPhone}>
                <Image src={phoneIcon} alt="phone"/>
                <span>+62</span>
                <input type="number" onChange={(e)=>{
                    setNoTelp(e.target.value)
                    setBtn(true)
                }}/>
            </div>
            <div className={btn ?  styles.editPhoneAct :  styles.editPhone} onClick={editPhone}>Edit Phone Number</div>
        </div>
    </Layout>
    </>
  )
}

export default ManagePhone