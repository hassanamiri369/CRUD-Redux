import {GET_DETAILS} from "../type"


const initialState = {
    details : []
}

export const Reducer = (state = initialState , action)=>{
    switch (action.type){
        case  GET_DETAILS :
            // توی این اکشن دات پیلود ما کل دیتا داره میاد از طریف دیس پچ 
            return {details : action.payload}
        
        default :
            return state;
    }
}