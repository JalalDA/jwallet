import Head from 'next/head'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Side from './Side/Side'
import styles from '../../src/pages/dashboard/Dashboard.module.css'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

const Layout = ({children, title}) => {
  const router = useRouter()
  const token = useSelector(state=>state.login.token)
  
  useEffect(()=>{
    if(!token){
      router.push('/auth/login')
    }
  })
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