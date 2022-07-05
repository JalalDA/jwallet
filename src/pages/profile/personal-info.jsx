import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import Layout from "../../components/Layout"
import styles from './Profile.module.css'
import { editUserInfo } from "../../api/api"
import {getUserAction} from "../../../redux/actionCreator/getUser"
import Loading from "../../components/Loading/Loading"
import Modal from "../../components/Modal"
import { useRouter } from "next/router"

const Personal = () => {
    const userInfo = useSelector(state=>state.user.userInfo)
    const [showEdit, setShowEdit] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [show, setShow] = useState(false)
    const [msg, setMsg] = useState('')
    const id = useSelector(state=>state.login.id)
    console.log(id);
    const token = useSelector(state=>state.login.token)
    const dispatch = useDispatch()
    const router = useRouter()

    const editPersonalInfo = async ()=>{
        try {
            setIsLoading(true)
            const body = {
                firstName,
                lastName
            }
            console.log(body);
            const result = await editUserInfo(id, body, token)
            console.log(result);
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
        dispatch(getUserAction(id, token))
    }, [id, token, dispatch])
  return (
    <>
    {isLoading && <Loading/>}
    <Modal show={show} response={msg} onClose={()=>{
        setShow(false)
    }}/>
    <Layout title={"Personal Information"}>
        <div className={styles.container}>
            <div className={styles.tittle}>
                <span>Personal Information</span>
                <span>We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</span>
            </div>
            <div className={styles.editUser}>
                {showEdit ? <div className={styles.saveChange} onClick={editPersonalInfo}>Save Change</div> : "" }
                <span onClick={()=>{
                    setShowEdit(true)
                }}>Edit</span>
            </div>
            <div className={styles.detailUser}>
                <span>First Name</span>
                {showEdit ? <input type="text" placeholder="Insert your first name . . ." onChange={(e)=>{
                    setFirstName(e.target.value)
                }} /> : <span>{userInfo.firstName}</span>}
            </div>
            <div className={styles.detailUser}>
                <span>Last Name</span>
                {showEdit ? <input type="text" placeholder="Insert your last name . . ." onChange={e=>{
                    setLastName(e.target.value)
                }} /> : <span>{userInfo.lastName}</span>}
            </div>
            <div className={styles.detailUser}>
                <span>Verified e-mail</span>
                <span>{userInfo.email}</span>
            </div>
            <div className={styles.detailUser}>
                <span>Contact Phone</span>
                <span>{userInfo.noTelp}</span>
                <span onClick={()=>{
                    router.push('/profile/manage-phone')
                }}>Manage</span>
            </div>
        </div>
    </Layout>
    </>
  )
}

export default Personal