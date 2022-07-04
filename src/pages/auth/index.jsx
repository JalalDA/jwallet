import Head from 'next/head'
import React, { useState } from 'react'
import Sidebar from '../../../src/components/Sidebar/Sidebar'
import CreatePin from './CreatePin'
import Login from './Login'
import ForgotPassword from './reset-password/index'
import SignUp from './SignUp'
import styles from '../../../styles/Auth.module.css'
const Auth = () => {
  const [page, setPage] = useState('Sign Up')
  return (
    <>
    <Head>
      <title>{page}</title>
    </Head>
    <div className={styles.authContainer}>
    <Sidebar/>
    {page === 'Login'? <Login setPage={setPage}/>:<></> }
    {page === 'Sign Up'? <SignUp setPage={setPage}/>:<></> }
    {page === 'Forgot Password'? <ForgotPassword setPage={setPage}/>:<></> }
    {page === 'Create Pin'? <CreatePin setPage={setPage}/>:<></> }
    </div>
    </>
    )
}

export default Auth