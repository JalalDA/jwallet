
import {loginStr} from './actionString'
import { login } from '../../src/api/api'

export const loginAction = (body)=>{
    return {
        type : loginStr,
        payload : login(body)
    }
}

export const deleteAuth = ()=>{
    return {
        type : "DELETE_AUTH"
    }
}