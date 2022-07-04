import Layout from "../../components/Layout"
import styles from './Profile.module.css'
import Image from "next/image"
import marry from '../../assets/img/1.png'
import notes from '../../assets/img/notes.png'
import arrowLeft from '../../assets/img/arrow-left.png'
import { useRouter } from "next/router"

const Profile = () => {
    const router = useRouter()
  return (
    <Layout title={'Profile'}>
    <div className={styles.container}>
        <div className={styles.profileInfo}>
            <Image src={marry} alt="Profile Image" height={80} width={80}/>
            <div className={styles.edit}>
            <Image src={notes} alt="edit" height={10} width={10}/>
                <span>Edit</span>
            </div>
            <span>Marry Kitty</span>
            <span>08123421324</span>
        </div>
        <div className={styles.profileNav} onClick={()=>{
            router.push('profile/personal-info')
        }}>
            Personal Information
            <Image src={arrowLeft} alt="go"/>
        </div>
        <div className={styles.profileNav}>
            Change Password
            <Image src={arrowLeft} alt="go"/>
        </div>
        <div className={styles.profileNav}>
            Change PIN
            <Image src={arrowLeft} alt="go"/>
        </div>
        <div className={styles.profileNav}>
            Logout
            <Image src={arrowLeft} alt="go"/>
        </div>
    </div>
    </Layout>
  )
}

export default Profile