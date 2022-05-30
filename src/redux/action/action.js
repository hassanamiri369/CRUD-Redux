import {GET_DETAILS , POST_DETAILS} from "../type"

// فانکشن هارو اینجا مینویسیم و اینجا استفاده میکنیم 
// میتونیم اون فانکشن هارو مستقیم تو خود اینجا هم بنویسیم 
import {GetApiDetails , PostApiDetails} from "../../api/axiosRequest"


const GetApiAction = () =>{
    return (dispatch) => {
        // این فانکشن میاد گت میزنه و از سرور دیتا رو میگیره و پاس میده به ردیوسر 
        return GetApiDetails()
        .then(res => {
            console.log(res)
            dispatch({type : GET_DETAILS , payload : res.data})
        })
    }
}

// این
// request 
// همون دیتایی که کاربر اد کرده و میخواهیم بفرستیمش به بک اند 
const PostApiAction = (request ) =>{
    // return (dispatch)=> dispatch({type : POST_DETAILS , payload : false})
    // return (dispatch) => (  PostApiDetails(request)) 
    //     // داره یه چیزی رو پست میکنه پس داخل پیلود چیزی نباید باشه که میخواهیم بفرستیم به استیت 
    //     .then( res =>  dispatch({type : POST_DETAILS , payload : ""}) )

    return function (dispatch) {
        dispatch({type : POST_DETAILS , payload : false});
        return PostApiDetails(request).then((res)=> {
            console.log("res",res)
            dispatch({type : POST_DETAILS , payload : true})
        })
      }
    
}


export {PostApiAction , GetApiAction}