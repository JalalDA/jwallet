import styles from './Transfer.module.css'
import Image from 'next/image'
import {Search} from 'react-bootstrap-icons'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import blankProfile from '../../assets/img/profileBlank.jpg'

const Transfer = () => {
    const [limit, setLimit] = useState(8)
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('firstName ASC')
    const [user, setUser] = useState([])
    const [page, setPage] = useState(10)
    const token = useSelector(state=>state.login.userInfo.token)
    const router = useRouter()
    
    useEffect(()=>{
        const getDataUser = async()=>{
            try {
                const config = {
                    headers : {
                        Authorization : `Bearer ${token}`
                    }
                }
                const result = await axios.get(`${process.env.SERVER_HOST}/user?page=${page}limit=${limit}&search=${search}&sort=${sort}`, config)
                setUser(result.data.data)
                console.log(result.data.data);
            } catch (error) {
                console.log(error);
            }
        }
        getDataUser()
    }, [limit, search, sort, token, page])
  return (
    <Layout title={"Transfer"}>
    <div className={styles.container}>
        <div className={styles.tittle}>
            <span>Search Receiver</span>
        </div>
        <div className={styles.search}>
            <Search/>
            <input type="text" placeholder='Search receiver here' onChange={(e)=>{
                setTimeout(()=>{
                    setSearch(e.target.value)
                }, 2000)
            }}/>
        </div>
        {user.map(user=>
        <>
        <div className={styles.userTrans}>
            <div className={styles.userInfo} onClick={()=>{
                router.push(`transfer/${user.id}`)
            }}>
                <Image src={user.image ? user.image : blankProfile} alt="profile" width={100} height={100}/>
                <div className={styles.user}>
                    <span>{user.firstName}</span>
                    <span>{user.phone}</span>
                </div>
            </div>
        </div>
        </> 
        )}
    </div>
    </Layout>
  )
}

export default Transfer