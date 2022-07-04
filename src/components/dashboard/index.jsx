import styles from './Dashboard.module.css'
import Image from 'next/image'
import plus from '../../assets/img/plus.png'
import arrow from '../../assets/img/arrow-up.png'
import income from '../../assets/img/income.png'
import expense from '../../assets/img/expense.png'
import marry from '../../assets/img/1.png'
import { useRouter } from 'next/router'
import TopUp from '../ModalPin/TopUp'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getUserAction} from '../../../redux/actionCreator/getUser'
import getDashboardAction from '../../../redux/actionCreator/getDashboard'
import Loading from '../Loading/Loading'
import axios from 'axios'

const Sidebar = () => {
    const [show, setShow] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const id = useSelector(state=>state.login.userInfo.id)
    const token = useSelector(state=>state.login.userInfo.token)
    const dashboardInfo = useSelector(state=>state.dashboard.dashboardInfo)
    const userInfo = useSelector(state=>state.user.userInfo)
    const [data, setData] = useState([])
    const dispatch = useDispatch()
    useEffect( ()=>{
        setIsLoading(true)
        dispatch(getUserAction(id, token))
        dispatch(getDashboardAction(id, token))
        const getAllHistory = async ()=>{
            try {
                const config = { headers: { Authorization: `Bearer ${token}`} }
                const result = await axios.get(`${process.env.SERVER_HOST}/transaction/history?page=1&limit=5&filter=MONTH`, config)
                console.log(result);
                setData(result.data.data)
            } catch (error) {
                console.log(error);
            }
        }
        getAllHistory()
        setIsLoading(false)
    }, [id, token, dispatch])
  return (
    <>
    {isLoading && <Loading/>}
    <TopUp show={show} onClose={setShow}/>
    <div className={styles.container}>
        <div className={styles.info}>
            <div className={styles.saldo}>
                <span>Balance</span>
                <span>{userInfo && userInfo.balance}</span>
                <span>Phone</span>
            </div>
            <div className={styles.transaction}>
                <div className={styles.transfer} onClick={()=>{
                    router.push('/transfer')
                }}>
                    <Image src={arrow} alt="transfer"/>
                    <span>Transfer</span>
                </div>
                <div className={styles.transfer} onClick={()=>{
                    setShow(true)
                }}>
                    <Image src={plus} alt="topup"/>
                    <span>Top Up</span>
                </div>
            </div>
        </div>
        <div className={styles.bottom}>
            <div className={styles.chart}>
                <div className={styles.traffic}>
                    <div className={styles.income}>
                        <Image src={income} alt="income"/>
                        <span>Income</span>
                        <span>{dashboardInfo.totalIncome}</span>
                    </div>
                    <div className={styles.income}>
                        <Image src={expense} alt="expense"/>
                        <span>Expense</span>
                        <span>{dashboardInfo.totalExpense}</span>
                    </div>
                </div>
                <div className={styles.chartInfo}>
                    <div className={styles.line}>
                        <span></span>
                        <span>Sun</span>
                    </div>
                    <div className={styles.line}>
                        <span></span>
                        <span>Mon</span>
                    </div>
                    <div className={styles.line}>
                        <span></span>
                        <span>Sun</span>
                    </div>
                    <div className={styles.line}>
                        <span></span>
                        <span>Sun</span>
                    </div>
                    <div className={styles.line}>
                        <span></span>
                        <span>Sun</span>
                    </div>
                    <div className={styles.line}>
                        <span></span>
                        <span>Sun</span>
                    </div>
                </div>
            </div>
            <div className={styles.historyTrans}>
                <div className={styles.historytitle}>
                    <span>Transaction History</span>
                    <span onClick={()=>{
                        router.push('/history')
                    }}>All</span>
                </div>
                {data.map(data=><>
            <div className={styles.userTrans}>
                <div className={styles.userInfo}>
                    <Image src={data && `${process.env.CLOUDINARY_URL}/${data.image}` ? `${process.env.CLOUDINARY_URL}/${data.image}` : blank  } alt="profile" height={50} width={50} />
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
            </div>
        </div>
    </div>
    </>
  )
}

export default Sidebar