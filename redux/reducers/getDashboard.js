import {getDashboardPending, getDashboardStr, getDashboardSucces, getDashoardReject} from '../actionCreator/actionString'

const initialState = {
    dashboardInfo : {},
    isSucces : false,
    isLoading : false, 
    msg : ""
}

const getDashboardReducer = (state = initialState, action)=>{

    switch (action.type) {
        case getDashboardStr + getDashboardPending :
        return {...state, isLoading : true}
        case  getDashboardStr + getDashboardSucces :
        return {...state, isSucces : true, dashboardInfo : action.payload.data.data, msg : action.payload.data.msg}
        case getDashboardStr + getDashboardSucces :
        return {...state, isLoading : false, isSucces : false, msg : action.payload.response.data.msg}
        default:
        return {...state}
    }
}

export default getDashboardReducer