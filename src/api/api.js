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