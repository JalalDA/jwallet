import Head from 'next/head'
import React, { useState } from 'react'
import Sidebar from '../../../src/components/Sidebar/Sidebar'
import CreatePin from './CreatePin'
import Login from './Login'
import ForgotPassword from './reset-password/index'
import SignUp from './SignUp'
import styles from '../../../styles/Auth.module.css'
import Loading from '../../components/Loading/Loading';
const Auth = () => {
  const [page, setPage] = useState('Sign Up')
  const [isLoading, setIsLoading ] = useState(false)
  return (
    <>
        {isLoading && <Loading/>}
    <Head>
      <title>{page}</title>
    </Head>
    <div className={styles.authContainer}>
    <Sidebar/>
    {page === 'Login'? <Login setPage={setPage} setIsLoading={setIsLoading}/>:<></> }
    {page === 'Sign Up'? <SignUp setPage={setPage} setIsLoading={setIsLoading}/>:<></> }
    {page === 'Forgot Password'? <ForgotPassword setPage={setPage} setIsLoading={setIsLoading}/>:<></> }
    {page === 'Create Pin'? <CreatePin setPage={setPage} setIsLoading={setIsLoading}/>:<></> }
    </div>
    </>
    )
}

export default Auth