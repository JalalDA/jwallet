import Head from 'next/head'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Side from './Side/Side'
import styles from '../../src/pages/dashboard/Dashboard.module.css'

const Layout = ({children, title}) => {
  return (
    <>
    <Head>
      <title>{title}</title>
    </Head>
    <Header/>
    <div className={styles.dashboardContainer}>
    <Side/>
    {children}
    </div>
    <Footer/>
    </>
  )
}

export default Layout