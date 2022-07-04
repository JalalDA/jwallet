import { getUserStr } from "./actionString";
import { getDetailUser } from "../../src/api/api";

const getUserAction = (id, token)=>{
    return {
        type : getUserStr,
        payload : getDetailUser(id, token)
    }
}

export default getUserAction