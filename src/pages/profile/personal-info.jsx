import Layout from "../../components/Layout"
import styles from './Profile.module.css'

const Personal = () => {
  return (
    <Layout title={"Personal Information"}>
        <div className={styles.container}>
            <div className={styles.tittle}>
                <span>Personal Information</span>
                <span>We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</span>
            </div>
            <div className={styles.detailUser}>
                <span>firstName</span>
                <span>Fazzniture</span>
            </div>
            <div className={styles.detailUser}>
                <span>lastName</span>
                <span>Fazzniture</span>
            </div>
            <div className={styles.detailUser}>
                <span>Verified e-mail</span>
                <span>Fazzniture</span>
            </div>
            <div className={styles.detailUser}>
                <span>Contact Phone</span>
                <span>Fazzniture</span>
            </div>
        </div>
    </Layout>
  )
}

export default Personal