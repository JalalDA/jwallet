import {loginPending, loginStr, loginSucces, loginReject} from '../actionCreator/actionString'

const initialState = {
    userInfo : {},
    isSucces : false,
    isLoading : false, 
    msg : ""
}

const loginReducer = (state = initialState, action)=>{
    console.log(action.payload);
    console.log(action.payload);
    switch (action.type) {
        case loginStr + loginPending :
        return {...state, isLoading : true}
        case  loginStr + loginSucces :
        return {...state, isSucces : true, userInfo : action.payload.data.data, msg : action.payload.data.msg}
        case loginStr + loginReject :
        return {...state, isLoading : false, isSucces : false, msg : action.payload.response.data.msg}
        default:
        return {...state}
    }
}

export default loginReducer