
import Layout from '../../components/Layout'
import styles from './Profile.module.css'

const ChangePassword = () => {
  return (
    <Layout title={'Change Password'}>
        <div className={styles.container}>
            <div className={styles.tittle}>
                <span>Change Password</span>
                <span>You must enter your current password and then type your new password twice.</span>
            </div>
        </div>
    </Layout>
  )
}

export default ChangePassword