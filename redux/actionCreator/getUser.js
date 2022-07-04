import { getUserStr } from "./actionString";
import { getDetailUser } from "../../src/api/api";

export const getUserAction = (id, token)=>{
    return {
        type : getUserStr,
        payload : getDetailUser(id, token)
    }
}

export const deleteUser = ()=>{
    return {
        type : "DELETE_USER"
    }
}
