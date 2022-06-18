import {DELETE_TYPES, GET_DETAILS , POST_DETAILS , UPDATE_DETAILS} from "../type"


const initialState = {
    details : [] , 
    isResponse : false,

    detailsById : [],
    isUpdateResponse : false,
    isDeleteResponse : false
}

export const Reducer = (state = initialState , action)=>{
    
    switch (action.type){
        case  GET_DETAILS :
    
            return {details : action.payload}

        case POST_DETAILS : 
            // return {isResponse : action.payload}
            return {...state , isResponse : action.payload}
        


        case UPDATE_DETAILS : 
            // return {...state , isUpdateResponse : action.payload}
            return { isUpdateResponse : action.payload}

        case DELETE_TYPES : 
            return {isDeleteResponse : action.payload}
        default :
            return state;
    }
}