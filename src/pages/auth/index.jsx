import Head from 'next/head'
import React, { useState } from 'react'
import Sidebar from '../../../src/components/Sidebar/Sidebar'
import CreatePin from './CreatePin'
import ForgotPassword from './ForgotPassword'
import Login from './Login'
import ResetPassword from './ResetPassword'
import SignUp from './SignUp'
import styles from '../../../styles/Auth.module.css'
const Auth = () => {
  const [page, setPage] = useState('signup')
  return (
    <>
    <Head>
    </Head>
    <div className={styles.authContainer}>
    <Sidebar/>
    {page === 'login'? <Login setPage={setPage}/>:<></> }
    {page === 'signup'? <SignUp setPage={setPage}/>:<></> }
    {page === 'forgot-password'? <ForgotPassword setPage={setPage}/>:<></> }
    {page === 'createPin'? <CreatePin setPage={setPage}/>:<></> }
    {page === 'resetPassword'? <ResetPassword setPage={setPage}/>:<></> }
    </div>
    </>
    )
}

export default Auth