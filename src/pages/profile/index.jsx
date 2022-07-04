import Layout from "../../components/Layout"
import styles from './Profile.module.css'
import Image from "next/image"
import blank from '../../assets/img/profileBlank.jpg'
import notes from '../../assets/img/notes.png'
import arrowLeft from '../../assets/img/arrow-left.png'
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import Prompt from "../../components/ModalPin/Prompt"
import { useState } from "react"
import { editImage } from "../../api/api"
import Loading from "../../components/Loading/Loading"

const Profile = () => {
    const router = useRouter()
    const userInfo = useSelector(state=>state.user.userInfo)
    const token = useSelector(state=>state.login.token)
    const id = userInfo.id
    const [show, setShow] = useState(false)
    const [previewImg, setPreviewImg] = useState(null)
    const [image, setImage] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const changeImage = async ()=>{
        try {
            setIsLoading(true)
            const body = {
                image
            }
            const result = await editImage(id, body, token)
            console.log(result);
            setIsLoading(false)
        } catch (error) {
            console.log(error);
            setIsLoading(false)
        }
    }

  return (
    <>
    {isLoading && <Loading/>}
    <Layout title={'Profile'}>
        <Prompt show={show} onClose={()=>{
            setShow(false)
        }}/>
    <div className={styles.container}>
        <div className={styles.profileInfo}>
        <Image src={previewImg !== null ? previewImg :userInfo.image !== null ? `${process.env.CLOUDINARY_URL}${userInfo.image}` : blank} className={styles.profPict} width={'150px'} height={'150px'} alt="profileImage" />
            <div className={styles.edit}>
                <Image src={notes} alt="edit" height={10} width={10}/>
                <input type="file" onChange={(e)=>{
                    const file = e.target.files[0]
                    if(file) {
                    const reader = new FileReader()
                    reader.onload = () => {
                        setPreviewImg(reader.result)
                        setImage(file)
                    }
                    reader.readAsDataURL(file)
                }
                }}/>
                <span>Edit</span>
                <div className={styles.saveImage} onClick={changeImage}>
                    Save Change
                </div>
            </div>
            <span>{`${userInfo.firstName}${userInfo.lastName}`}</span>
            <span>{userInfo.noTelp}</span>
        </div>
        <div className={styles.profileNav} onClick={()=>{
            router.push('profile/personal-info')
        }}>
            Personal Information
            <Image src={arrowLeft} alt="go"/>
        </div>
        <div className={styles.profileNav} onClick={()=>{
            router.push('profile/change-password')
        }}>
            Change Password
            <Image src={arrowLeft} alt="go"/>
        </div>
        <div className={styles.profileNav} onClick={()=>{
            router.push('profile/change-pin')
        }}>
            Change PIN
            <Image src={arrowLeft} alt="go"/>
        </div>
        <div className={styles.profileNav} onClick={()=>{
            setShow(true)
        }}>
            Logout
            <Image src={arrowLeft} alt="go"/>
        </div>
    </div>
    </Layout>
    </>
  )
}

export default Profile