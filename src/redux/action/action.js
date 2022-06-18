import {GET_DETAILS , POST_DETAILS , UPDATE_DETAILS ,  DELETE_TYPES} from "../type"

import {GetApiDetails , PostApiDetails ,DeleteApiDetails ,UpdateApiDetails} from "../../api/axiosRequest"


const GetApiAction = () =>{
    return (dispatch) => {
        return GetApiDetails()
        .then(res => {
            console.log(res)
            dispatch({type : GET_DETAILS , payload : res.data})
        })
    }
}


const PostApiAction = (request ) =>{
    return function (dispatch) {
        dispatch({type : POST_DETAILS , payload : false});
        return PostApiDetails(request).then((res)=> {
            console.log("res",res)
            dispatch({type : POST_DETAILS , payload : true})
        })
      }
    
}


const UpdateApiAction = ( data ,id ) =>{
    return function (dispatch) {
        dispatch({type : UPDATE_DETAILS, payload : false});     
        return UpdateApiDetails(data , id).then((res)=> {
            console.log("res",res)
            dispatch({type : UPDATE_DETAILS , payload : true})
        })
      }   
}


const DeleteApiAction = ( id ) =>{
    return function (dispatch) {
        dispatch({type : DELETE_TYPES, payload : false});     
        return DeleteApiDetails( id).then((res)=> {
            console.log("res",res)
            dispatch({type : DELETE_TYPES , payload : true})
        })
      }
    
}




export {PostApiAction , GetApiAction , UpdateApiAction , DeleteApiAction}