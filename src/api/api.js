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