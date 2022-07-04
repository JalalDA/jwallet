import Head from 'next/head'
import Sidebar from '../../../src/components/Sidebar/Sidebar'
import styles from '../../../styles/Auth.module.css'
const AuthLayout = ({children, title}) => {
  return (
    <>
    <Head>
      <title>{title}</title>
    </Head>
    <div className={styles.authContainer}>
        <Sidebar/>
        {children}
    </div>
    </>
    )
}

export default AuthLayout