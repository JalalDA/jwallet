import {getuUserPending, getuUserSucces, getuUserReject, getUserStr} from '../actionCreator/actionString'

const initialState = {
    userInfo : {},
    isSucces : false,
    isLoading : false, 
    msg : ""
}

const getUserReducer = (state = initialState, action)=>{
    switch (action.type) {
        case getUserStr + getuUserPending :
        return {...state, isLoading : true}
        case  getUserStr + getuUserSucces :
        return {...state, isSucces : true, userInfo : action.payload.data.data, msg : action.payload.data.msg}
        case getUserStr + getuUserReject :
        return {...state, isLoading : false, isSucces : false, msg : action.payload.response.data.msg}
        default:
        return {...state}
    }
}

export default getUserReducer