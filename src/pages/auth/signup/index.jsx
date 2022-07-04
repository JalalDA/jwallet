import { useState } from 'react'
import AuthLayout from '../../../components/auth/AuthLayout'
import SignUp from '../../../components/auth/SignUp'
import Loading from '../../../components/Loading/Loading'

const Index = () => {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <>
  {isLoading && <Loading />}
    <AuthLayout title={'Sign Up'}>
        <SignUp setIsLoading={setIsLoading}/>
    </AuthLayout>
    </>
  )
}

export default Index