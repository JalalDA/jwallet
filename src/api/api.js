import axios from "axios";


let config = (token)=>{
    return {
        headers : {
            Authorization : `Bearer ${token}`
        }
    }  
} 

export const login = (body)=>{
    return axios.post(`${process.env.SERVER_HOST}/auth/login`, body)
}
export const updatePin = (id, body, token)=>{
    let res = config(token)
    return axios.patch(`${process.env.SERVER_HOST}/user/pin/${id}`, body, res)
}

export const forgotPassword = (email, body, token)=>{
    let res = config(email, token)
    return axios.post(`${process.env.SERVER_HOST}/auth/forgot-password`, body, res)
}

export const resetPass = (body)=>{
    return axios.patch(`${process.env.SERVER_HOST}/auth/reset-password`, body)
}

export const topUp = (body, token)=>{
    let res = config(token)
    return axios.post(`${process.env.SERVER_HOST}/transaction/top-up`, body, res)
}

export const getDetailUser = (id, token)=>{
    let res = config(token)
    return axios.get(`${process.env.SERVER_HOST}/user/profile/${id}`, res)
}

export const getDashboard = (id, token)=>{
    let res = config(token)
    return axios.get(`${process.env.SERVER_HOST}/dashboard/${id}`, res)
}

export const checkPinUser = (body, token)=>{
    let conf = config(token)
    return axios.get(`${process.env.SERVER_HOST}/user/pin?pin=${body}`, conf)
}

export const transfer = (body, token)=>{
    let conf = config(token)
    return axios.post(`${process.env.SERVER_HOST}/transaction/transfer`, body, conf)
}

export const editImage = (id, body, token)=>{
    const config = { headers: { Authorization: `Bearer ${token}`, "content-type": "multipart/form-data" } }
    return axios.patch(`${process.env.SERVER_HOST}/user/image/${id}`, body, config)
}

export const editUserInfo = (id, body, token)=>{
    const config = { headers: { Authorization: `Bearer ${token}`} }
    return axios.patch(`${process.env.SERVER_HOST}/user/profile/${id}`, body, config)
}

export const editPhoneNumber = (id, body, token)=>{
    const config = { headers: { Authorization: `Bearer ${token}`} }
    return axios.patch(`${process.env.SERVER_HOST}/user/profile/${id}`, body, config)
} 

export const updatePassword = (id, body, token)=>{
    const config = { headers: { Authorization: `Bearer ${token}`} }
    return axios.patch(`${process.env.SERVER_HOST}/user/password/${id}`, body, config)
}

export const logoutServer = (token)=>{
    const config = { headers: { Authorization: `Bearer ${token}`} }
    return axios.post(`${process.env.SERVER_HOST}/auth/logout`, config)
}

export const exportTrans =(id, token)=>{
    const config = { headers: { Authorization: `Bearer ${token}`} }
    return axios.get(`${process.env.SERVER_HOST}/export/transaction/${id}`, config)
}
