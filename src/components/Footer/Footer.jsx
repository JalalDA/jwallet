import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
        <div className={styles.allright}>2020 FazzPay. All right reserved.</div>
        <div className={styles.right}>
            <div className={styles.phone}>+6281315805251</div>
            <div className={styles.contact}>contact@fazzpay.com</div>
        </div>
    </div>
  )
}

export default Footer