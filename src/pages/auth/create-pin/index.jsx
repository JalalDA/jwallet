import { useState } from "react"
import AuthLayout from "../../../components/auth/AuthLayout"
import CreatePin from "../../../components/auth/CreatePin"
import Loading from "../../../components/Loading/Loading"


const Index = () => {
  const [isLaoding, setIsLoading] = useState()
  return (
    <>
    {isLaoding && <Loading/>}
    <AuthLayout title={'Create Pin'}>
        <CreatePin showLoad={setIsLoading}/>
    </AuthLayout>
    </>
  )
}

export default Index