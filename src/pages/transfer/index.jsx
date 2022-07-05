import styles from './Transfer.module.css'
import Image from 'next/image'
import {Search} from 'react-bootstrap-icons'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import blankProfile from '../../assets/img/profileBlank.jpg'
import Loading from '../../components/Loading/Loading'

const Transfer = () => {
    const [limit, setLimit] = useState(6)
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('firstName')
    const [user, setUser] = useState([])
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    const token = useSelector(state=>state.login.userInfo.token)
    const router = useRouter()
    
    useEffect(()=>{
        const getDataUser = async()=>{
            try {
                setIsLoading(true)
                const config = {
                    headers : {
                        Authorization : `Bearer ${token}`
                    }
                }
                let url = `${process.env.SERVER_HOST}/user?page=${page}&limit=${limit}&search=${search}&sort=${sort}`
                const result = await axios.get(url, config)
                setUser(result.data.data)
                console.log(result.data.data);
                console.log(url);
                setIsLoading(false)
            } catch (error) {
                console.log(error);
                setIsLoading(false)
            }
        }
        getDataUser()
    }, [search, sort, page, token, limit])
  return (
    <>
    {isLoading && <Loading/>}
    <Layout title={"Transfer"}>
    <div className={styles.container}>
        <div className={styles.tittle}>
            <span>Search Receiver</span>
        </div>
        <div className={styles.search}>
            <Search/>
            <input type="text" placeholder='Search receiver here' onKeyUp={(e)=>{
                if(e.key === "Enter"){
                    setSearch(e.target.value)
                }
            }} 
            // onChange={(e)=>{
            //     setSearch(e.target.value)
            // }}
            />
        </div>
        {user.map(user=>
        <>
        <div className={styles.userTrans}>
            <div className={styles.userInfo} onClick={()=>{
                router.push(`transfer/${user.id}`)
            }}>
                <Image src={user && user.image ? `${process.env.CLOUDINARY_URL}/${user.image}` : blankProfile} alt="profile" width={100} height={100}/>
                <div className={styles.user}>
                    <span>{user && `${user.firstName} ${user.lastName}`}</span>
                    <span>{user && user.phone}</span>
                </div>
            </div>
        </div>
        </> 
        )}
    </div>
    </Layout>
    </>
  )
}

export default Transfer