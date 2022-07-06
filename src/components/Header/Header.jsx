import styles from './Header.module.css'
import bell from '../../assets/img/bell.png'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import blankProfile from '../../assets/img/profileBlank.jpg'
import { useRouter } from 'next/router'

const Header = (props) => {
  const router = useRouter()
  const userInfo = useSelector(state=>state.user.userInfo)
  const {setShowToggle, showToggle} = props
  return (
    <div className={styles.headerContainer}>
      <div className={styles.toggle} onClick={()=>{
        if(!showToggle){
          setShowToggle(true)
        }
        if(showToggle){
          setShowToggle(false)
        }
    }}>
      <span></span>
      <span></span>
      <span></span></div>
      <div className={styles.logo}>FazzPay</div>
      <div className={styles.profile}>
        <div className={styles.imgProfile}>
          <Image className={styles.profileImg} src={userInfo && userInfo.image ? `${process.env.CLOUDINARY_URL}${userInfo.image}` : blankProfile} alt="profile image" height={50} width={50}
          onClick={()=>{
            router.push('/profile')
          }}
          />  
        </div>
        <div className={styles.info}>
          <div className="name">{userInfo && `${userInfo.firstName} ${userInfo.lastName}`}</div>
          <div className="phone">{userInfo && userInfo.noTelp}</div>
        </div>
        <div className={styles.notif}>
          <Image src={bell} alt="notification"/>
        </div>
      </div>
    </div>
  )
}

export default Header