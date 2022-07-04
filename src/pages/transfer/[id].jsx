import styles from './confirm/Confirm.module.css'
import Image from 'next/image'
import Layout from '../../components/Layout'
import notes from '../../assets/img/notes.png'
import { getDetailUser } from '../../api/api'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import blankProfile from '../../assets/img/profileBlank.jpg'
import ModalPin from '../../components/ModalPin'
import succesIcon from '../../assets/img/success.png'
import failIcon from '../../assets/img/failed.png'
import downloadIcon from '../../assets/img/download.png'

const Detail = () => {
    const token = useSelector(state=>state.login.userInfo.token)
    const router = useRouter()
    const {id} = router.query
    const [detailUser, setDetailUser] = useState({})
    const [showPage, setShowPage] = useState('input')
    const [show, setShow] = useState(false)
    const [amount, setAmount] = useState(0)
    const [note, setNote ] = useState('')
    const availBalance = useSelector(state=>state.user.userInfo.balance)

    useEffect(()=>{
        const getUserById = async ()=>{
            try {
                const result = await getDetailUser(id, token)
                setDetailUser(result.data.data)
            } catch (error) {
                console.log(error);
            }
        }
        getUserById()
    }, [id, token])
  return (
    <Layout title={'Transfer'}>
        <ModalPin 
        show ={show} 
        amount={amount} 
        note={note} 
        receiverId={id} 
        onClose={setShow}
        setShowPage={setShowPage}
        />
    <div className={styles.container}>
        {showPage === 'input' 
            ? 
            <>
            <div className={styles.tittle}>
            <span>Transfer Money</span>
        </div>
        <div className={styles.userTrans}>
            <div className={styles.userInfo}>
            <Image src={`${process.env.CLOUDINARY_URL}${detailUser.image}` || blankProfile} alt="profile" width={100} height={100}/>
            <div className={styles.user}>
                <span>{`${detailUser.firstName} ${detailUser.lastName}`}</span>
                <span>{detailUser.phone}</span>
            </div>
            </div>
        </div>
        <div className={styles.tag}>
        <p>Type the amount you want to transfer and then</p>
        <p>press continue to the next steps.</p>
        </div>
        <div className={styles.inputAmmount}>
            <input type="number" placeholder='0' onChange={e=>{
                setAmount(e.target.value)
            }}/>
            <span>{availBalance} Available</span>
            <div className={styles.notes}>
                <Image src={notes} alt="notes"/>
                <input type="text" placeholder='Add some notes here' onChange={(e)=>{
                    setNote(e.target.value)
                }}/>
            </div>
        </div>
        <div className={styles.btnContinue}>
            <div className={styles.continue} onClick={()=>{
                setShowPage('detail')
            }}>Continue</div>
        </div>
            </> : ''}
        {showPage === 'detail' 
            ? 
            <>
            <div className={styles.tittle}>
            <span>Transfer Money</span>
        </div>
        <div className={styles.userTrans}>
            <div className={styles.userInfo}>
            <Image src={`${process.env.CLOUDINARY_URL}${detailUser.image}` || blankProfile} alt="profile" width={100} height={100}/>
            <div className={styles.user}>
                <span>{`${detailUser.firstName} ${detailUser.lastName}`}</span>
                <span>{detailUser.phone}</span>
            </div>
            </div>
        </div>
        <div className={styles.details}>
          <span>Details</span>
        </div>
        <div className={styles.userTrans}>
            <div className={styles.userInfo}>
            <div className={styles.detailInfo}>
                <span>Ammount</span>
                <span>{amount}</span>
            </div>
            </div>
        </div>
        <div className={styles.userTrans}>
            <div className={styles.userInfo}>
            <div className={styles.detailInfo}>
                <span>Balance Left</span>
                <span>Rp120000</span>
            </div>
            </div>
        </div>
        <div className={styles.userTrans}>
            <div className={styles.userInfo}>
            <div className={styles.detailInfo}>
                <span>Date & Time</span>
                <span>20 - 05 - 2001</span>
            </div>
            </div>
        </div>
        <div className={styles.userTrans}>
            <div className={styles.userInfo}>
            <div className={styles.detailInfo}>
                <span>Notes</span>
                <span>{note}</span>
            </div>
            </div>
        </div>
        <div className={styles.btnContinue}>
            <div className={styles.continue} onClick={()=>{
                setShow(true)
            }}>Continue</div>
        </div>
            </> : ''}
        {showPage === 'succes' ? 
        <>
        <div className={styles.imgStatus}>
            <Image src={succesIcon} alt="succes"/>
            <span>Transfer Succes</span>
        </div>
    <div className={styles.details}>
      <span>Details</span>
    </div>
    <div className={styles.userTrans}>
        <div className={styles.userInfo}>
        <div className={styles.detailInfo}>
            <span>Ammount</span>
            <span>{amount}</span>
        </div>
        </div>
    </div>
    <div className={styles.userTrans}>
        <div className={styles.userInfo}>
        <div className={styles.detailInfo}>
            <span>Balance Left</span>
            <span>Rp120000</span>
        </div>
        </div>
    </div>
    <div className={styles.userTrans}>
        <div className={styles.userInfo}>
        <div className={styles.detailInfo}>
            <span>Date & Time</span>
            <span>20 - 05 - 2001</span>
        </div>
        </div>
    </div>
    <div className={styles.userTrans}>
        <div className={styles.userInfo}>
        <div className={styles.detailInfo}>
            <span>Notes</span>
            <span>{note}</span>
        </div>
        </div>
    </div>

    <div className={styles.tittle}>
        <span>Transfer To</span>
    </div>
    <div className={styles.userTrans}>
        <div className={styles.userInfo}>
        <Image src={`${process.env.CLOUDINARY_URL}${detailUser.image}` || blankProfile} alt="profile" width={100} height={100}/>
        <div className={styles.user}>
            <span>{`${detailUser.firstName} ${detailUser.lastName}`}</span>
            <span>{detailUser.phone}</span>
        </div>
        </div>
    </div>

    <div className={styles.btnContinue}>
        <div className={styles.btnDownload}>
            <Image src={downloadIcon} alt="download"/>
            <span>Download PDF</span>
        </div>
        <div className={styles.continue} >
            <div className="btn">Back To Home</div>
        </div>
    </div>
    
        </>: ""}
        {showPage === 'failed' ? 
        <>
        <div className={styles.imgStatus}>
            <Image src={failIcon} alt="Failed"/>
            <span>We can’t transfer your money at the moment, we recommend you to check your internet connection and try again.</span>
        </div>
    <div className={styles.details}>
      <span>Details</span>
    </div>
    <div className={styles.userTrans}>
        <div className={styles.userInfo}>
        <div className={styles.detailInfo}>
            <span>Ammount</span>
            <span>{amount}</span>
        </div>
        </div>
    </div>
    <div className={styles.userTrans}>
        <div className={styles.userInfo}>
        <div className={styles.detailInfo}>
            <span>Balance Left</span>
            <span>Rp120000</span>
        </div>
        </div>
    </div>
    <div className={styles.userTrans}>
        <div className={styles.userInfo}>
        <div className={styles.detailInfo}>
            <span>Date & Time</span>
            <span>20 - 05 - 2001</span>
        </div>
        </div>
    </div>
    <div className={styles.userTrans}>
        <div className={styles.userInfo}>
        <div className={styles.detailInfo}>
            <span>Notes</span>
            <span>{note}</span>
        </div>
        </div>
    </div>

    <div className={styles.tittle}>
        <span>Transfer To</span>
    </div>
    <div className={styles.userTrans}>
        <div className={styles.userInfo}>
        <Image src={`${process.env.CLOUDINARY_URL}${detailUser.image}` || blankProfile} alt="profile" width={100} height={100}/>
        <div className={styles.user}>
            <span>{`${detailUser.firstName} ${detailUser.lastName}`}</span>
            <span>{detailUser.phone}</span>
        </div>
        </div>
    </div>

    <div className={styles.btnContinue}>
        <div className={styles.btnDownload}>
            <Image src={downloadIcon} alt="download"/>
            <span>Download PDF</span>
        </div>
        <div className={styles.continue} >
            <div className="btn">Back To Home</div>
        </div>
    </div>
    
        </>: ""}
    </div>
    </Layout>
  )
}

export default Detail