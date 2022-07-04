import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import call from '../../src/assets/img/call.png'
import lock from '../../src/assets/img/lock.png'
import dIcon from '../../src/assets/img/downloadIcon.png'
import group from '../../src/assets/img/grup2.png'
import {useRouter} from 'next/router' 

export default function Home() {
  const router = useRouter()
  return (
    <>
    <Head>
      <title>J Wallet</title>
    </Head>
      <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>FazzPay</div>
        <div className={styles.auth}>
          <div className={styles.login} onClick={()=>{
            router.push('/auth/login', 'auth/login')
          }}>LOGIN</div>
          <div className={styles.signup} onClick={()=>{
            router.push('/auth/signup', 'auth/signup')
          }}>SIGN UP</div>
        </div>
      </div>
      <div className={styles.hero}>
        <span>Awesome App</span>
        <span>For Saving Time.</span>
        <span>We bring you a mobile app for banking problems that</span>
        <span> oftenly wasting much of your times.</span>
        <div className={styles.btn_try}>Try It Free</div>
      </div>
      </div>
      <div className={styles.features}>
        <div className={styles.features_tittle}>
        <span>Why <b>Choose Fazzpay</b></span>
        <p>We have some great features from the application and it’s totally free </p>
        <p>to use by all users around the world.</p>
        </div>
        <div className={styles.features_content}>
          <div className={styles.downloads}>
            <Image src={call} width='150' height='150' alt='call' />
            <div className={styles.content_tittle}>24/7 Support</div>
            <div className={styles.content_text}>We have 24/7 contact support so you can contact us whenever you want and we will respond it.</div>
          </div>
          <div className={styles.downloads}>
          <Image src={lock} width='150' height='150' alt='lock' />
          <div className={styles.content_tittle}>Data Privacy</div>
          <div className={styles.content_text}>We make sure your data is safe in our database and we will encrypt any data you submitted to us.</div>
          </div>
          <div className={styles.downloads}>
          <Image src={dIcon} width='150' height='150' alt='downloads' />
          <div className={styles.content_tittle}>Easy Download</div>
          <div className={styles.content_text}>Jwallet is 100% totally free to use it’s now available on Google Play Store and App Store.</div>
          </div>
        </div>
      </div>
      <div className={styles.group}><Image src={group} alt='support'/></div>
    </>
  )
}
