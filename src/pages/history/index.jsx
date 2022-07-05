import styles from './History.module.css'
import Image from 'next/image'
import Layout from '../../components/Layout'
import { useEffect, useState } from 'react'
import Loading from '../../components/Loading/Loading'
import blank from '../../assets/img/profileBlank.jpg'
import { useSelector } from 'react-redux'
import axios from 'axios'
import ArrowLeft from '../../assets/img/ArrowLeft.png'
import ArrowRight from '../../assets/img/ArrowRight.png'
import { useRouter } from 'next/router'

const History = () => {
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(6)
    const [filter, setFilter] = useState("MONTH")
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const token = useSelector(state=>state.login.token)
    const router = useRouter()

    useEffect(()=>{
        const getAllHistory = async ()=>{
            try {
                setIsLoading(true)
                const config = { headers: { Authorization: `Bearer ${token}`} }
                const result = await axios.get(`${process.env.SERVER_HOST}/transaction/history?page=${page}&limit=${limit}&filter=${filter}`, config)
                console.log(result);
                setData(result.data.data)
                setIsLoading(false)
            } catch (error) {
                console.log(error);
                setIsLoading(false)
            }
        }
        getAllHistory()
    }, [page, limit, token, filter])
  return (
    <>
    {isLoading && <Loading/>}
    <Layout title={"History"}>
    <div className={styles.container}>
        <div className={styles.tittle}>
            <span>Transaction History</span>
            <select className={styles.filter} onChange={(e)=>{
                setFilter(e.target.value)
            }}>
                <option value="latest">-- Select Filter--</option>
                <option value="WEEK">WeeK</option>
                <option value="MONTH">Month</option>
                <option value="YEAR">Year</option>
            </select>
        </div>
        {data.map(data=><>
            <div className={styles.userTrans}>
            <div className={styles.userInfo}>
            <Image src={data && `${process.env.CLOUDINARY_URL}/${data.image}` ? `${process.env.CLOUDINARY_URL}/${data.image}` : blank  } alt="profile" height={56} width={56} />
            <div className={styles.user}>
                <span>{data && `${data.firstName} ${data.lastName}`}</span>
                <span>{data && data.status}</span>
            </div>
            </div>
            <div className={ data.type ==="send" && data.status==="success"? styles.ammountRed : styles.ammount}>
            { data.type ==="send" && data.status==="success"? " - " : " + "}
                {data.amount}
            </div>
        </div>
        </>)}
        <div className={styles.showMore} onClick={()=>{
            setLimit(limit + 6)
            router.push('/history', `/history/page=${page}&limit=${limit+6}`)
        }
        }>Show More ...</div>
        <div className={styles.paginasi}>
            <Image src={ArrowLeft} alt="prev" onClick={()=>{
                if(page !== 1){
                    setPage(page-1)
                    router.push('/history', `/history/page=${page - 1}&limit=${limit}`)
                }
            }}/>
            <div className={page === 1 ? styles.countAct : styles.count}>1</div>
            <div className={page === 2 ? styles.countAct : styles.count}>2</div>
            <div className={page === 3 ? styles.countAct : styles.count}>3</div>
            <Image src={ArrowRight} alt="next" onClick={()=>{
                setPage(page+1)
                router.push('/history', `/history/page=${page + 1}&limit=${limit}`)
            }}/>
        </div>
    </div>
    </Layout>
    </>
  )
}

export default History