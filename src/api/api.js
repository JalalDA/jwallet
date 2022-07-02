import axios from "axios";

export const login = (body)=>{
    console.log(body);
    return axios.post(`${process.env.SERVER_HOST}/auth/login`, body)
}
// export const updatePin = axios.patch()