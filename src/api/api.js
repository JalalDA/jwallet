import axios from "axios";


const config = (token)=>{
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
    const res = config(token)
    return axios.patch(`${process.env.SERVER_HOST}/user/pin/${id}`, body, res)
}

export const forgotPassword = (email, body, token)=>{
    const res = config(email, token)
    return axios.post(`${process.env.SERVER_HOST}/auth/forgot-password`, body, res)
}

export const resetPass = (body)=>{
    return axios.patch(`${process.env.SERVER_HOST}/auth/reset-password`, body)
}

export const topUp = (body, token)=>{
    const res = config(token)
    return axios.post(`${process.env.SERVER_HOST}/transaction/top-up`, body, res)
}

export const getDetailUser = (id, token)=>{
    const res = config(token)
    return axios.get(`${process.env.SERVER_HOST}/user/profile/${id}`, res)
}

export const getDashboard = (id, token)=>{
    const res = config(token)
    return axios.get(`${process.env.SERVER_HOST}/dashboard/${id}`, res)
}