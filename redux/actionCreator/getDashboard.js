import { getDashboardStr } from "./actionString";
import { getDashboard } from "../../src/api/api";

const getDashboardAction = (id, token)=>{
    return {
        type : getDashboardStr,
        payload : getDashboard(id, token)
    }
}

export default getDashboardAction