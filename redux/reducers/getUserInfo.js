import {getUserPending, getUserSucces, getUserReject, getUserStr} from '../actionCreator/actionString'

const initialState = {
    userInfo : {},
    isSucces : false,
    isLoading : false, 
    msg : ""
}

const getUserReducer = (state = initialState, action)=>{
    switch (action.type) {
        case getUserStr + getUserPending :
        return {...state, isLoading : true}
        case  getUserStr + getUserSucces :
        return {...state, isSucces : true, userInfo : action.payload.data.data, msg : action.payload.data.msg}
        case getUserStr + getUserReject :
        return {...state, isLoading : false, isSucces : false, msg : action.payload.response.data.msg}
        case "DELETE_USER" :
        return {initialState}
        default:
        return state
    }
}

export default getUserReducer