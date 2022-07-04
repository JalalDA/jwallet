import {loginPending, loginStr, loginSucces, loginReject} from '../actionCreator/actionString'

const initialState = {
    userInfo : {},
    isSucces : false,
    isLoading : false, 
    msg : "",
    token : false,
    id : ""
}

const loginReducer = (state = initialState, action)=>{
    switch (action.type) {
        case loginStr + loginPending :
        return {...state, isLoading : true}
        case  loginStr + loginSucces :
        return {...state, isSucces : true, userInfo : action.payload.data.data, msg : action.payload.data.msg, token : action.payload.data.data.token, id : action.payload.data.data.id}
        case loginStr + loginReject :
        return {...state, isLoading : false, isSucces : false, msg : action.payload.response.data.msg}
        case "DELETE_AUTH" :
        return {initialState}
        default:
        return state
    }
}

export default loginReducer