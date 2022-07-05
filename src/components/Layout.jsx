import Head from 'next/head'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Side from './Side/Side'
import styles from '../../src/pages/dashboard/Dashboard.module.css'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Modal from './Modal'

const Layout = ({children, title}) => {
  const router = useRouter()
  const token = useSelector(state=>state.login.token)
  const[show, setShow] = useState(false)

  useEffect(()=>{
    if(!token){
      setShow(true)
    }
  }, [token])
  return (
    <>
    <Head>
      <title>{title}</title>
    </Head>
    <Modal show={show} response={"Please Login first"} onClose={()=>{
      setShow(false)
      router.push('/auth/login')
    }}/>
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