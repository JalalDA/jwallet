import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import call from '../../src/assets/img/call.png'
import lock from '../../src/assets/img/lock.png'
import dIcon from '../../src/assets/img/downloadIcon.png'
import group from '../../src/assets/img/grup2.png'
import {useRouter} from 'next/router' 
import LayoutImg from '../assets/img/LayoutImg.png'
import ArrowLeft from '../assets/img/ArrowLeft.png'
import ArrowRight from '../assets/img/ArrowRight.png'
import ProfImg from '../assets/img/ProfImg.png'

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
        <div className={styles.btn_try} onClick={()=>{
            router.push('/auth/signup', 'auth/signup')
        }}>Try It Free</div>
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
      
      <section className={styles.wrapperPrice}>
          <div className={styles.priceTitle}>Rp. 390.736.500</div>
          <div className={styles.priceBody}>Money has Been Transfered.</div>
          <div className={styles.priceFooter}>That amount of money has been transfered from all users. We still counting and going strong!</div>
        </section>
        <section className={styles.wrapperFeatureTwo}>
          <aside className={styles.featureTwoImage}>
            <Image src={LayoutImg} alt='layoutImg'></Image>
          </aside>
          <aside className={styles.featureTwoContent}>
            <div className={styles.featureTwoContentTitle}>All The <div className={styles.why}>Great</div> FazzPay Features.</div>
            <div className={styles.wrapperFeatureContentBody}>
              <div className={styles.featureTwoContentHeader}><div className={styles.why}>1.</div>Small Fee</div>
              <div className={styles.featureTwoContentBody}>We only charge 5% of every success transaction done in FazzPay app.</div>
            </div>
            <div className={styles.wrapperFeatureContentBody}>
              <div className={styles.featureTwoContentHeader}><div className={styles.why}>2.</div>Data Secured</div>
              <div className={styles.featureTwoContentBody}>All your data is secured properly in our system and it’s encrypted.</div>
            </div>
            <div className={styles.wrapperFeatureContentBody}>
              <div className={styles.featureTwoContentHeader}><div className={styles.why}>3.</div>User Friendly</div>
              <div className={styles.featureTwoContentBody}>FazzPay come up with modern and sleek design and not complicated.</div>
            </div>
          </aside>
        </section>
        <section className={styles.wrapperUser}>
          <div className={styles.userHeader}>
            <div className={styles.userTitle}>What Users are <div className={styles.why}>Saying.</div></div>
            <div className={styles.userBody}>We have some great features from the application and it’s totally free to use by all users around the world.</div>
            <div className={styles.wrapperCard}>
              <div className={styles.arrowIcon}>
                <Image src={ArrowLeft} alt='arrowIcon'></Image>
              </div>
              <div className={styles.card}>
                <div className={styles.cardImg}>
                  <Image src={ProfImg} alt='profilImage'></Image>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.username}>Alex Hansinburg</div>
                  <div className={styles.role}>Designer</div>
                </div>
                <div className={styles.cardFooter}>“This is the most outstanding app that I’ve ever try in my live, this app is such an amazing masterpiece and it’s suitable for you who is bussy with their bussiness and must transfer money to another person aut there. Just try this app and see the power!”</div>
              </div>
              <div className={styles.arrowIcon}>
                <Image src={ArrowRight} alt='arrowIcon'></Image>
              </div>
            </div>
          </div>
        </section>
        <footer className={styles.containerFooter}>
        <aside className={styles.wrapperFooterHeader}>
          <div className={styles.fazzPay}>FazzPay</div>
          <div className={styles.footerBody}>Simplify financial needs and saving much time in banking needs with one single app.</div>
        </aside>
        <div className={styles.wrapperFooterEnd}>
          <div className={styles.year}>2020 FazzPay. All right reserved.</div>
          <div className={styles.contactNumber}>+62 5637 8882 9901</div>
          <div className={styles.contactEmail}>contact@fazzpay.com</div>
        </div>
      </footer>

    </>
  )
}
